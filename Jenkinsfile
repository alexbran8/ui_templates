#!groovy

node {

    try {
        stage 'Checkout'

            dir('/apps/ecosystem'){
            sh "pwd"
       
            checkout scm

            sh 'git log HEAD^..HEAD --pretty="%h %an - %s" > GIT_CHANGES'
            def lastChanges = readFile('GIT_CHANGES')
            // slackSend color: "warning", message: "Started `${env.JOB_NAME}#${env.BUILD_NUMBER}`\n\n_The changes:_\n${lastChanges}"
                         }
            sh "pwd"
        
        stage 'Test'
            sh 'echo "test implementation in progress"'
            load " var/lib/jenkins/nodes/env.groovy"
                    echo "${env.env_var1}"
                    echo "${env.env_var2}"
            // load "/jenkins_home/.env"
            // sh '. env/bin/activate'
            // sh 'env/bin/pip install -r requirements.txt'
            // sh 'env/bin/python3.5 manage.py test --testrunner=djtrump.tests.test_runners.NoDbTestRunner'

        // stage 'Deploy'
        //  dir('/apps/ecosystem'){
        //     sh 'chmod +x deploy_prod.sh'
        //     sh 'cat deploy_prod.sh'
        //     sh './deploy_prod.sh'
        //  }
        stage 'Publish results'
            // slackSend color: "good", message: "Build successful: `${env.JOB_NAME}#${env.BUILD_NUMBER}` <${env.BUILD_URL}|Open in Jenkins>"
    }

    catch (err) {
        // slackSend color: "danger", message: "Build failed :face_with_head_bandage: \n`${env.JOB_NAME}#${env.BUILD_NUMBER}` <${env.BUILD_URL}|Open in Jenkins>"

        throw err
    }
    finally {
        // deploy previous  container
    }

}