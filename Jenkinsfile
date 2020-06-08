pipeline {

    environment {
    registry = "hendwanabozide123/back-end"
    registryCredential = 'dockerhub'
    dockerImage = ''
    }

    agent any


    stages {

        stage('Cloning our BackEnd Git') {
            
            steps {

                git 'https://github.com/HendwanAbozide/Backendtry.git'
             }
        }



        stage('Build Docker Image'){
            steps{

                script{

                    dockerImage=docker.build registry + ":$BUILD_TAG"

                }

            }

         }
        stage('Push Docker Image'){
            steps{

                script{

                    docker.withRegistry('','dockerhub'){

                        dockerImage.push();
                    }
                }
            }

        }
    }

    post{

        success{

            echo 'Build is successful!'
        }

        failure {


            echo 'Build failed!'
        }

    }


}

