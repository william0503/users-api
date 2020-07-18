pipeline {
    agent {
        docker {
            image 'node:12-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
        registry = 'guiareze/users-api'
        registryCredential = 'dockerhub_id'
        dockerImage = ''
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test'
            }
        }
        stage('Cloning our Git') {
            steps {
                git 'https://github.com/guiarese/users-api.git'
            }
        }
        stage('Building our image') {
            steps{
                script {
                    def dockerHome = tool 'myDocker'
                    env.PATH = "${dockerHome}/bin:${env.PATH}"
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Deploy our image') {
            steps{
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Cleaning up') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER"
            }
        }
        stage('Deliver') {
            steps {
                sh 'npm start'
            }
        }
    }
}
