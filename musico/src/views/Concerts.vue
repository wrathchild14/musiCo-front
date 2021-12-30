<template>
    <v-main>
        <NavBar/>
        <v-card width="70%" class="mx-auto my-10 elevation-0">
            <div class="text-center">
                <h1 class="blue-grey--text text--darken-4">Enter your location</h1>
                <v-card width="40%" class="mx-auto my-5 elevation-0">
                    <v-form>
                            <v-text-field outline label="Search your location" append-icon="mdi-search" rounded filled prepend-inner-icon="mdi-map-search">

                            </v-text-field>
                        </v-form>
                </v-card>
                <h2 class="blue-grey--text text--darken-4 ">15 Upcoming events</h2>
                <v-row>
                    <v-col>
                        <v-card class="my-10">
                            <v-row>
                                <v-col>
                                    <v-card class="elevation-0">
                                        <v-img src="https://cdn19.picsart.com/91600188492.jpeg?type=webp&to=crop&r=256" width="200" class="mx-auto"></v-img>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card class="elevation-0">
                                        <h2 class="font-weight-bold red--text text--darken-1">Arctic Monkeys</h2>
                                        <h3 class="font-weight-regular"> <v-icon left>mdi-map-marker-radius</v-icon> Arena Skopje :)</h3>
                                    </v-card>
                                    <v-card class="mt-5 elevation-0">
                                        <h2 class="font-weight-bold red--text text--darken-1">Date</h2>
                                        <h3 class="font-weight-regular"> <v-icon left>mdi-calendar-range</v-icon> 22.1.2022</h3>
                                    </v-card>
                                    <v-card class="mt-6 mx-auto" width="50%" color="#77D970">
                                        <h3 class="grey--text text--lighten-4">More info</h3>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="my-10">
                            <v-row>
                                <v-col>
                                    <v-card class="elevation-0">
                                        <v-img src="data:image/jpeg;base64,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" width="200" class="mx-auto"></v-img>
                                    </v-card>
                                </v-col>
                                <v-col>
                                    <v-card class="elevation-0">
                                        <h2 class="font-weight-bold red--text text--darken-1">Igor Konanenko</h2>
                                        <h3 class="font-weight-regular"> <v-icon left>mdi-map-marker-radius</v-icon> Fakulteta za racunalnistvo</h3>
                                    </v-card>
                                    <v-card class="mt-5 elevation-0">
                                        <h2 class="font-weight-bold red--text text--darken-1">Date</h2>
                                        <h3 class="font-weight-regular"> <v-icon left>mdi-calendar-range</v-icon> 23.1.2022</h3>
                                    </v-card>
                                    <v-card class="mt-6 mx-auto" width="50%" color="#77D970">
                                        <h3 class="grey--text text--lighten-4">More info</h3>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
                        
                        
                    
            </div>
        </v-card>
    </v-main>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
    name: 'Concerts',
    components: {NavBar},
}
</script>