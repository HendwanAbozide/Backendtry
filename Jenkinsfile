pipeline {

//    agent any
    agent {
        
        docker {

            label 'mydocker'
            image 'node:12.17-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh './test.sh'
        //     }
        // }
        // stage('Deliver') {
        //     steps {
        //         sh 'npm run build'
        //         //input message: 'Finished using the web site? (Click "Proceed" to continue)'
                
        //     }
        // }
        // stage('start') {
        //     steps {
        //         sh 'npm start'
        //     }
        // }
    }

    post{

        success{

            echo 'yesssssss'
        }

        failure {


            echo 'noooooo'
        }

    }



}

