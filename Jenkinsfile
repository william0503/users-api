pipeline {
    
    environment { 
        CI = "true"
        image = ''
        registryUrl = 'guiareze/users-api'
        registryCredentialsId = 'dockerhub_id';
    }
    
    agent any
    stages {
        stage("DockerHub Connection") {
            steps {
                echo "Init Clone Process"
                git  "https://github.com/guiarese/users-api.git"

            script {
                echo "Build Image"
                image = docker.build registryUrl + ":$BUILD_NUMBER"
                
                echo "Deploy on DockerHub"
                docker.withRegistry('', registryCredentialsId) {
					image.push()
				}
            }    

                echo "Cleaning Up"
                sh "docker rmi $registryUrl:$BUILD_NUMBER"
            }
        }
        
        stage('Test') {
            agent{
                docker {
                    image 'node:12-alpine'
                    args '-p 3000:3000 -p 5000:5000'
                }
            }
            
            steps {
                sh "npm install"
                sh "npm test"            
            }
        }
        
        stage('Deliver') {
            steps {
                sh "docker run -d $registryUrl:$BUILD_NUMBER"
		input message: 'Finished Using The Web Site? (Click "Proceed" to continue)'
                sh 'set -x'
            }
        }        
    }
}
