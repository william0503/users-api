pipeline {
    
    environment { 
        CI = "true"
        image = ''
        registryUrl = 'william0503/users-api'
        registryCredentialsId = 'dockerhub_id';
    }
    
    agent any
    stages {
	
	stage("Initial configs") {
	    steps {
		sh "sudo docker ps -a -q | xargs -n 1 -P 8 -I {} docker stop {}"
		slackSend channel: '#users-api', 
                          message: 'Parando serviços ativos para a subida dos novos'
	    }
	}
	    
        stage("DockerHub Connection") {
            steps {
                echo "Init Clone Process"
                git  "https://github.com/william0503/users-api.git"

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
		    
		slackSend channel: '#users-api', 
                          message: 'Deploy do container efetuado no docker hub'
		    
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
		slackSend channel: '#users-api', 
                          message: 'Testes unitários efetuados com sucesso'
            }
        }
        
        stage('Deliver') {
            steps {
                sh "docker run -d -p 3000:3000 $registryUrl:$BUILD_NUMBER"
		sh "docker ps"
		slackSend channel: '#users-api', 
                          message: 'Aplicação funcionando no caminho localhost:3000'
            }
        }        
    }
}
