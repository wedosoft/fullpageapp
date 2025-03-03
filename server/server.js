exports = {
    // Server method to check the call module functionality
    checkCallModule: async function () {
        try {
            // Make a test API call to the Freshcaller service
            const response = await $request.invoke('https://api.freshcaller.com/v1/calls', {
                headers: {
                    "Authorization": "Bearer <%= iparam.freshcaller_api_key %>",
                    "Content-Type": "application/json"
                }
            });

            // Process the response from the Freshcaller API
            if (response.status === 200) {
                // If the call module is functional, return a success message
                return { message: "The call module is functional." };
            } else {
                // If the call module is not functional, return an error message
                return { message: "The call module is not functional." };
            }
        } catch (error) {
            // Handle any exceptions that may occur during the API call
            // Return an appropriate error message
            return { message: `Error: ${error.message}` };
        }
    },

    // Other handler functions can be added here
    onCallUpdateHandler: function() {
        // Call update logic
    },
    onCallCreateHandler: function() {
        // Call create logic
    },
};
