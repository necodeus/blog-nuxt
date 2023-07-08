import { defineStore } from 'pinia'

export const usePlayerStore = defineStore({
    id: 'player-store',
    state: () => {
        return {
            currentPlayerData: {},
        }
    },
    actions: {
        updateCurrentPlayer(value) {
            this.currentPlayerData = value
        },
    },
    getters: {
        currentPlayer: state => state.currentPlayerData,
    },
})
