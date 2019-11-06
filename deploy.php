<?php
namespace Deployer;

require 'recipe/symfony4.php';

// Project name
set('application', 'Vlogger');

// Project repository
set('repository', 'git@github.com:fgc0415/Vlogger.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
// add('shared_files', []);
// add('shared_dirs', []);

// Writable dirs by web server
// add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('vlogger.fgc.mixh.jp')
    ->user('lbqhvbsc')
    ->hostname('fgc.mixh.jp')
    ->port(22)
    ->stage('staging')
    ->set('branch', 'master')
    ->set('composer_options', '{{composer_action}} --prefer-dist --no-progress --no-interaction --optimize-autoloader --no-dev')
    ->set('deploy_path', '~/public_html/{{application}}')
    ->add('shared_files', ['.env.local']);
    
// Tasks

task('build:assets', function(){
    runLocally('yarn build');
    upload('public/build/', '{{release_path}}/public');
});
before('deploy:symlink', 'build:assets');

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'database:migrate');
