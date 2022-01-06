<template>
    <v-main>
        <NavBar/>
        <v-card width="70%" class="mx-auto my-10 elevation-0">
            
            <div >
                <v-parallax class="my" height="400" src="https://www.pier17ny.com/wp-content/uploads/2021/09/PassionPit-TheBeaches-Night1-115-1560x960.jpg">
                <v-card class="elevation-0 ml-5" color="transparent">
                    <h1 class="white--text font-weight-bold" style="font-size:3em">Discover your favorite artists</h1>
                </v-card>
                <v-card class="elevation-0 font-weight-light font-italic my-5 ml-5" color="transparent">
                    <h3 class="white--text">Be the first to know about concerts, tour announcements <br> and news based on the music you love</h3>
                </v-card>
                <v-card class="elevation-0 ml-5" color="transparent" height="100">
                    <v-btn x-large class="my-10" color="green accent-3">Log in with Spotify</v-btn>
                </v-card>
                </v-parallax>
            </div>
            <div class="text-center my-5">
                <v-row>
                    <v-text-field  outline label="Search for an artist" append-icon="mdi-search" prepend-inner-icon="mdi-account-music"></v-text-field>
                    <v-btn  color="primary" x-large elevation="1" plain icon >
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-row>
            </div>
            <div class="text-center ">
                <v-card class="elevation-0 my-5">
                    <h1 style="font-size: 2.5em">Most popular artists worldwide</h1>
                </v-card>
                <v-card class="elevation-0 my-5">
                    <v-row>
                        <v-col>
                            <v-card class="elevation-1 my-5">
                                <v-img height="300" width="300" class="mx-auto" src="https://media.nu.nl/m/7w3x7mza4otb_sqr256.jpg/drake-reageert-voor-het-eerst-op-festivaldrama-na-aanklacht-hart-is-gebroken.jpg"></v-img>
                                <h2 class="my-4">Drizzy</h2>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card class="elevation-1 my-5">
                                <v-img height="300" width="300" class="mx-auto" src="https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952"></v-img>
                                <h2 class="my-4">Ariana Grande</h2>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card class="elevation-1 my-5">
                                <v-img height="300" width="300" class="mx-auto" src="https://iscale.iheart.com/catalog/artist/744880"></v-img>
                                <h2 class="my-4">The Weeknd</h2>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card class="elevation- my-5">
                                <v-img height="300" width="300" class="mx-auto" src="https://mogujatosama.rs/sites/default/files/images/5(626).jpg"></v-img>
                                <h2 class="my-4">Adele</h2>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card>
                
            </div>
        </v-card>

    </v-main>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
    name: 'Artists',
    components: {NavBar},
}
</script>