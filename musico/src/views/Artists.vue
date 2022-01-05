<template>
    <v-main>
        <NavBar/>
        <v-card width="70%" class="mx-auto my-10 elevation-0">
            <v-parallax height="500" src="https://images.pexels.com/photos/3122799/pexels-photo-3122799.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                <div class="text-center">
                    <v-card class="elevation-0 " color="transparent" >
                        <v-row>
                            <v-col>
                                <v-card class="elevation-0 my-auto" color="transparent" >
                                    <div class="text-center">
                                        <h1>.</h1>
                                        <h1 class="white--text font-weight-bold" height="400" style="font-size: 4.7em">Arctic Monkeys</h1>
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col>
                                <v-card class="elevation-0" color="transparent">
                                    <v-img src="https://www.nme.com/wp-content/uploads/2018/01/Arctic-Monkeys-03-Photo-Credit-Zackery-Michael-HI-RES.jpg" width="400" class="mx-auto"></v-img>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card>
                </div>
            </v-parallax>
            <template>
                <v-card class="mt-5 elevation-0">
                    <v-tabs centered>
                        <v-tab>Concerts</v-tab>
                        <v-tab>Information</v-tab>
                        <v-tab-item>
                            <v-card class="mt-10 mx-auto elevation-0" width="70%">
                                <h1>Upcoming concerts</h1>
                            </v-card>
                            <v-card class="mt-10 mx-auto elevation-0" width="70%">
                                
                                <v-card>
                                    <v-expansion-panels focusable>
                                        <v-expansion-panel class="my-5">
                                            <v-expansion-panel-header>
                                                <v-row>
                                                    <v-col cols="2">
                                                        <div class="text-center">
                                                            <h3 class="font-weight-medium">mart</h3>
                                                            <h1 class="font-weight-bold my-2">04</h1>
                                                            <h3 class="font-weight-medium my-2">2022</h3>
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <h1 class="red--text text--darken-1">Arena Skopje</h1>
                                                        <h3 class="font-weight-light my-2">Adresa </h3>
                                                        <h3 class="font-weight-thin my-2">Nesto drugo</h3>
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="my-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam accusamus sunt temporibus cupiditate, iusto id laborum perferendis doloremque, hic illum debitis, neque labore. Distinctio tenetur necessitatibus totam delectus.</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="my-5">
                                            <v-expansion-panel-header>
                                                <v-row>
                                                    <v-col cols="2">
                                                        <div class="text-center">
                                                            <h3 class="font-weight-medium">jun</h3>
                                                            <h1 class="font-weight-bold my-2">14</h1>
                                                            <h3 class="font-weight-medium my-2">2022</h3>
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <h1 class="red--text text--darken-1">Arena Beograd</h1>
                                                        <h3 class="font-weight-light my-2">Adresa </h3>
                                                        <h3 class="font-weight-thin my-2">Nesto drugo</h3>
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="my-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam accusamus sunt temporibus cupiditate, iusto id laborum perferendis doloremque, hic illum debitis, neque labore. Distinctio tenetur necessitatibus totam delectus.</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>
                                                <v-row>
                                                    <v-col cols="2">
                                                        <div class="text-center">
                                                            <h3 class="font-weight-medium">decembar</h3>
                                                            <h1 class="font-weight-bold my-2">24</h1>
                                                            <h3 class="font-weight-medium my-2">2023</h3>
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <h1 class="red--text text--darken-1">Arena Ljubljana</h1>
                                                        <h3 class="font-weight-light my-2">Adresa </h3>
                                                        <h3 class="font-weight-thin my-2">Nesto drugo</h3>
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="my-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam accusamus sunt temporibus cupiditate, iusto id laborum perferendis doloremque, hic illum debitis, neque labore. Distinctio tenetur necessitatibus totam delectus.</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="my-5">
                                            <v-expansion-panel-header>
                                                <v-row>
                                                    <v-col cols="2">
                                                        <div class="text-center">
                                                            <h3 class="font-weight-medium">novembar</h3>
                                                            <h1 class="font-weight-bold my-2">24</h1>
                                                            <h3 class="font-weight-medium my-2">2023</h3>
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <h1 class="red--text text--darken-1">Arena Barcelona</h1>
                                                        <h3 class="font-weight-light my-2">Adresa </h3>
                                                        <h3 class="font-weight-thin my-2">Nesto drugo</h3>
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="my-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam accusamus sunt temporibus cupiditate, iusto id laborum perferendis doloremque, hic illum debitis, neque labore. Distinctio tenetur necessitatibus totam delectus.</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="my-5">
                                            <v-expansion-panel-header>
                                                <v-row>
                                                    <v-col cols="2">
                                                        <div class="text-center">
                                                            <h3 class="font-weight-medium">januar</h3>
                                                            <h1 class="font-weight-bold my-2">04</h1>
                                                            <h3 class="font-weight-medium my-2">2023</h3>
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <h1 class="red--text text--darken-1">Arena London</h1>
                                                        <h3 class="font-weight-light my-2">Adresa </h3>
                                                        <h3 class="font-weight-thin my-2">Nesto drugo</h3>
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="my-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam accusamus sunt temporibus cupiditate, iusto id laborum perferendis doloremque, hic illum debitis, neque labore. Distinctio tenetur necessitatibus totam delectus.</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                        <v-expansion-panel class="my-5">
                                            <v-expansion-panel-header>
                                                <v-row>
                                                    <v-col cols="2">
                                                        <div class="text-center">
                                                            <h3 class="font-weight-medium">maj</h3>
                                                            <h1 class="font-weight-bold my-2">24</h1>
                                                            <h3 class="font-weight-medium my-2">2023</h3>
                                                        </div>
                                                    </v-col>
                                                    <v-col cols="6">
                                                        <h1 class="red--text text--darken-1">Arena Berlin</h1>
                                                        <h3 class="font-weight-light my-2">Adresa </h3>
                                                        <h3 class="font-weight-thin my-2">Nesto drugo</h3>
                                                    </v-col>
                                                </v-row>
                                            </v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <p class="my-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magni ipsam accusamus sunt temporibus cupiditate, iusto id laborum perferendis doloremque, hic illum debitis, neque labore. Distinctio tenetur necessitatibus totam delectus.</p>
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-card>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card class="mt-10 elevation-0">
                                <h1>Information</h1>
                                <h2 class="font-weight-light font-italic my-5">Arctic Monkeys are an English rock band formed in Sheffield in 2002. The group consists of Alex Turner (lead vocals, guitar, keyboards), Jamie Cook (guitar, keyboards), Nick O'Malley (bass guitar, backing vocals), and Matt Helders (drums, backing vocals). Former band member Andy Nicholson (bass guitar, backing vocals) left the band in 2006 shortly after their debut album was released.

Arctic Monkeys were heralded as one of the first bands to come to public attention via the Internet, with commentators suggesting they represented the possibility of a change in the way in which new bands are promoted and marketed.[1] Their debut album, Whatever People Say I Am, That's What I'm Not (2006), became the fastest-selling debut album in UK chart history, and has been hailed as one of the greatest debut albums.[2] It won Best British Album at the 2007 Brit Awards. The band's second album, Favourite Worst Nightmare (2007), was also acclaimed by critics and won Best British Album at the 2008 BRIT Awards. They went on to release Humbug (2009) and Suck It and See (2011).</h2>
                            </v-card>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
                
            </template>
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