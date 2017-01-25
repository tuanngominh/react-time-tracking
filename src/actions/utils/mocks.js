/*
Mock firebase.auth() methods
*/

/*
 * @success: true : mock success case; false: mock failed case
 * @errorMessage: error message used in failed cae
 */
const createPromise = (success, errorMessage) => {
  return new Promise(function(resolve, reject){
    if (success) {
      resolve()
    } else {
      reject({
        message: errorMessage
      })  
    }              
  })  
}

export const mockSignOut = (success, errorMessage) => {
  return {
    initializeApp: () => {},
    auth: () => {
      return {
        signOut: () => {
          return createPromise(success, errorMessage)
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
          return createPromise(success, errorMessage)
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
          return createPromise(success, errorMessage)
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
          return createPromise(success, errorMessage)
        }
      }
    }
  }
}

let mockScenarioData = {
  mockSuccessCase: true
}
export const mockFirebase = () => {
  return {
    initializeApp: () => {},
    setMockScenarioData: (scenarioData) => {
      mockScenarioData = scenarioData
    },
    auth: () => {
      return {
        verifyPasswordResetCode: (code) => {
          return new Promise(function(resolve, reject){
            if (mockScenarioData.mockSuccessCase) {
              resolve(mockScenarioData.email)
            } else {
              reject({
                message: mockScenarioData.errorMessage
              })  
            }              
          })
        },
        sendPasswordResetEmail: (email) => {
          return createPromise(mockScenarioData.mockSuccessCase, mockScenarioData.errorMessage)
        },
        confirmPasswordReset: (code, newPassword) => {
          return createPromise(mockScenarioData.mockSuccessCase, mockScenarioData.errorMessage)
        }        
      }
    }
  }
}