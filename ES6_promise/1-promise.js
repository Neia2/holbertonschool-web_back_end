// 1-promise.js
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  }).catch((error) => {
    console.error('Handled promise rejection:', error);
    // Return a resolved promise with an error message to avoid unhandled rejection
    return { status: 'error', message: error.message };
  });
}
