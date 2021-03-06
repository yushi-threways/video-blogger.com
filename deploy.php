<?php
namespace Deployer;

require 'recipe/symfony4.php';

// Project name
set('application', 'video-blogger.com');

// Project repository
set('repository', 'git@github.com:fgc0415/video-blogger.com.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server
add('writable_dirs', [
]);
set('allow_anonymous_stats', false);

set('http_user', 'lbqhvbsc');

set('writable_mode', 'chmod');

// Hosts
host('fgc.mixh.jp')
    ->user('lbqhvbsc')
    ->port(22)
//    ->forwardAgent() // You can use identity key, ssh config, or username/password to auth on the server.
//    ->identityFile(getenv('STAGING_SSH_IDENTIFIER_KEY'))
    ->stage('staging')
    ->set('branch', 'master')
    ->set('deploy_path', '~/public_html/vlogger/{{application}}') // Define the base path to deploy your project to.
    ->set('composer_options', '{{composer_action}} --verbose --prefer-dist --no-progress --no-interaction --optimize-autoloader')
    ->add('shared_files', ['.env.local', 'public/.htaccess']);

host('video-blogger.com')
    ->user('lbqhvbsc')
    ->port(22)
    ->stage('prod')
    ->set('branch', 'master')
    ->set('composer_options', '{{composer_action}} --verbose --prefer-dist --no-progress --no-interaction --optimize-autoloader')
    ->set('deploy_path', '~/public_html/{{application}}')
    ->add('shared_files', ['.env.local', 'public/.htaccess']);

// Tasks
task('build:assets', function () {
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
