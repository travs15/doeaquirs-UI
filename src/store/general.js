import { defineStore } from 'pinia';

export const useGeneralStore = defineStore('general', {
    state() {
        return {
            cities: [],
        };
    },
    getters: {
        /**
         * Computes and returns the user's initials.
         * @param {{}} state
         * @return {string}
         */
        userName: (state) => {
            if (state.user.family_name && state.user.given_name) {
                return `${state.user.given_name[0]}${state.user.family_name[0]}`;
            }
            return '';
        },
    },
    actions: {
        /**
       * @param {{}} user
       */
        setUser(user) {
            this.user = user;
        },
        /**
         * @param {{}} activeDashboard
         */
        setActiveDashboard(activeDashboard) {
            this.activeDashboard = activeDashboard;
        },
        /**
         * @param {Workspace} activeWorkspace
         */
        setActiveWorkspace(activeWorkspace) {
            this.activeWorkspace = activeWorkspace;
        },
        /**
         * Adds a Message to the messages array
         * @param {Message} message
         */
        addMessage(message) {
            this.messages.push(message);
        },
        /**
         * Deletes all messages for the specified scope.
         * @param {string} scope
         */
        clearMessagesByScope(scope) {
            for (let i = this.messages.length - 1; i >= 0; --i) {
                if (this.messages[i].scope === scope) {
                    this.messages.splice(i, 1);
                }
            }
        },
        /**
         * Removes the passed message object from the state's messages array if it exists
         * @param {{}} state
         * @param {Message} message  - the Message to pop from the array
         */
        removeMessage(message) {
            let index = this.messages.indexOf(message);
            if (index > -1) {
                this.messages.splice(index, 1);
            }
        },
        /**
         * Clears all Messages from the messages array.
         * @param {{}} state
         */
        clearMessages() {
            this.messages = [];
        },
        /**
         * Sets the id of the session warning timeout
         * @param {number} id
         */
        setSessionWarningTimeoutId(id) {
            this.sessionWarningTimeoutId = id;
        },
        /**
         * Sets the id of the session timeout
         * @param {number} id
         */
        setSessionTimeoutId(id) {
            this.sessionTimeoutId = id;
        },
        /**
         * Sets the id of the session timeout
         * @param {boolean} authenticated
         */
        setUserAuthenticatedOnApp(authenticated) {
            this.userAuthenticatedOnApp = authenticated;
        },
    }
})
