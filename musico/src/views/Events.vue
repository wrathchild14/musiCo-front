<template>
    <v-main>
        <NavBar/>
        <v-card width="70%" class="mx-auto my-10 elevation-0">
            <div class="text-center">
                <v-row>
                    <v-text-field :loading="loadingSearch" v-model="city" outline label="Search your location" append-icon="mdi-search" prepend-inner-icon="mdi-map-search"></v-text-field>
                    <v-btn @click="getEvents" color="primary" x-large elevation="1" plain icon >
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-row>
            </div>
        </v-card>
        <v-card width="70%" class="mx-auto my-10 elevation-0">
            <div class="text-center">
                <h1>Events at your location:</h1>
            </div>
        </v-card>

        <div class="events">
            <v-container class="mt-5">

                <v-alert
                class="text-center" 
                v-if="noMovies"
                border="bottom"
                colored-border
                type="warning"
                elevation="2"
                >
                    No events for that city
                </v-alert>
                
                <v-row>
                    <v-col v-for="event in events" :key="event.id" md="4" xs="12">
                        
                    <v-card
                        class="mx-auto"
                        max-width="400"
                        height="350"
                    >
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="event.artist.img_link"
                        >
                        <v-card-title >
                            <div class="font-weight-bold text-h5">
                            {{ event.artist.name }}
                            </div>
                        </v-card-title>
                        </v-img>

                        <v-card-subtitle class="pb-0 font-weight-bold">
                        {{ event.date }}
                        </v-card-subtitle>

                        <v-card-text class="text--primary">

                        <div ><h2 class="red--text text--darken-1 my-2">{{ event.venue.name }}</h2></div>
                        <div><h3 class="font-weight-light my-2"><v-icon >mdi-map-marker</v-icon>{{ event.venue.info }}</h3></div>
                        </v-card-text>

                    </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-main>
</template>

<script>
import NavBar from '@/components/NavBar';

import { getAPI } from "../axios-api.js";


export default {
    name: 'Events',
    components: {NavBar},
    data: () => ({
        loadingSearch: false,
        noMovies:true,
        
        city: '',
        events: [
        ]
    }),
    methods: {
        checkPictures() {
            for (let i = 0; i < this.events.length; i++) {
                // Event gets default image if it doesn't have the artist image
                if (this.events[i].artist.img_link === null) {
                    this.events[i].artist.img_link = 'https://media.istockphoto.com/photos/concert-stage-on-rock-festival-music-instruments-silhouettes-picture-id1199243596?k=20&m=1199243596&s=612x612&w=0&h=5L3fWhbB4YtVOPsnnqrUg22FaHnSGVCjkrG79wB31Tc=';
                }
            }
        },
        getEvents() {
            this.loadingSearch = true;

            // Formatting the input for searching
            this.city.toLowerCase;
            this.city = this.city.charAt(0).toUpperCase() + this.city.slice(1);

            getAPI
                .get('event/' + this.city + '/')
                .then((response) => {
                    this.events = response.data;
                    
                    if (this.events.length == 0 ) {
                        this.noMovies = true;
                    } else {
                        this.noMovies = false;
                    }
                })
                .catch((err) => {
                    console.log(err);
                    this.noMovies = true;
            });

            // To make the loading bar go brr
            setTimeout(() => { this.loadingSearch = false; this.checkPictures() } , 2000);
        }
    },
}
</script>