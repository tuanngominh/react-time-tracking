/*
Mock firebase.auth() methods
*/

export const mockSignOut = (success, errorMessage) => {
  return {
    initializeApp: () => {},
    auth: () => {
      return {
        signOut: () => {
          return new Promise(function(resolve, reject){
            if (success) {
              resolve()
            } else {
              reject(errorMessage)  
            }              
          })
        }
      }
    }
  }
}

export const mockCreateUserWithEmailAndPassword = (success, errorMessage) => {
  return {
    initializeApp: () => {},
    auth: () => {
      return {
        createUserWithEmailAndPassword: (email, password) => {
          return new Promise(function(resolve, reject){
            if (success) {
              resolve()
            } else {
              reject(errorMessage)  
            }              
          })
        }
      }
    }
  }
}

export const mockOnAuthStateChanged = (success, errorMessage) => {
  return {
    initializeApp: () => {},
    auth: () => {
      return {
        onAuthStateChanged: (user) => {
          return new Promise(function(resolve, reject){
            if (success) {
              resolve()
            } else {
              reject(errorMessage)  
            }              
          })
        }
      }
    }
  }
}

export const mockSignInWithEmailAndPassword = (success, errorMessage) => {
  return {
    initializeApp: () => {},
    auth: () => {
      return {
        signInWithEmailAndPassword: (email, password) => {
          return new Promise(function(resolve, reject){
            if (success) {
              resolve()
            } else {
              reject(errorMessage)  
            }              
          })
        }
      }
    }
  }
}