
//Vue app

const { createApp } = Vue

createApp({
    data() {
        return {
            // TUTTI I CONTATTI E LE LORO INFO
            contacts: [
                {
                    name: 'Peppe Commenda',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Mbare peppeeee',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: ' stasera giochi con anthony?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'non ci sono',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_1.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai? Stasera ci vediamo?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'che sclero, sto valutando',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'ava mbare',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_2.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_3.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_4.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_6.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_7.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeChatIndex: null,
            newMessage: '',



        }


    },
    methods: {
        selectChat(index) {
            this.activeChatIndex = index;

        },

        sendMessage() {
            if (this.newMessage.trim() !== '') {
              const newMessageObj = {
                date: new Date().toLocaleString(),
                message: this.newMessage,
                status: 'sent'
              };
              this.contacts[this.activeChatIndex].messages.push(newMessageObj);
              this.newMessage = '';
            }
          }

    },

    sendMessage() {
        let nuovoMessaggio = {
            date: '20/05/2024 14:32:51',
            message: 'Queste sono parole a caso?',
            status: 'sent'
        };
        // contacts, all'indice della chat attiva, nella proprietà con l'array dei messaggi, pusho nuovo messaggio
        this.contacts[this.chatAttiva].messages.push(nuovoMessaggio);
    },


    computed: {
        activeChatMessages() {
            if (this.activeChatIndex !== null) {
                return this.contacts[this.activeChatIndex].messages;
            }
            return [];
        },
        activeChatName() {
            if (this.activeChatIndex !== null) {
                return this.contacts[this.activeChatIndex].name;
            }
            return '';
        },
        activeChatAvatar() {
            if (this.activeChatIndex !== null) {
              return this.contacts[this.activeChatIndex].avatar;
            }
            return '';
          }
    }

    
},



).mount('#app')




















