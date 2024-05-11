import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: {
                name: null,
                email: null,
                phone: null,
            },
            userAuthenticatedOnApp: false,
        };
    },
    getters: {
        /**
         * Computes and returns the user's name.
         * @param {{}} state
         * @return {string}
         */
        userName: (state) => {
            if (state.user.name) {
                return `${state.user.name}`;
            }
            return '';
        },
    },
    actions: {
        /** sets the user info into the store
       * @param {{}} user
       */
        setUser(user) {
            this.user = user;
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
