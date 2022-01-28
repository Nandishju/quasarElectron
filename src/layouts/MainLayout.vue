<template>
  <div class="">
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class=" rounded-borders">
     
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="270"
        :breakpoint="500"
        bordered
        class="aspire__bg_color sidebar"
      >
        <q-scroll-area class="fit">
          <q-list>
            <img src="../assets/images/aspire__logo__green.png"  class="aspire__logo__sidebar"/>
            <p class="trusted__text">Trusted way of banking for 3,000+ SMEs and startups in Singapore </p>
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Cards'" v-ripple>
                <q-item-section avatar>
                  <!-- <q-icon :name="menuItem.icon" /> -->
                  <img :src="require(`../assets/images/${menuItem.image}`)" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <!-- <q-separator :key="'sep' + index"  v-if="menuItem.separator" /> -->
            </template>

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <div class="row header_page">
            <div class="col">
              <span>Available balance</span>
              <p class="available__balance">
                   <span class="badge__doller">
                     S$
                   </span>

                <span class="avl__bal">3,000</span></p>


                <!-- <div v-for="(todo, index) in $store.state.todos" :key="index">
                  <p>fcsfsd</p>
                  <p>{{todo.title}}</p>
                  <p>{{todo.completed}}</p>
                </div> -->
            </div>

            <div class="col">
                <div class="q-pa-md q-gutter-sm new__card__button">

                  <!-- <q-btn label="New card" color="primary" icon-left="colorize" @click="inception = true" /> -->
                <q-btn unelevated color="primary" icon="add_circle" label="New card" @click="inception = true"/>
                  <q-dialog v-model="inception">
                    <q-card>
                      <q-card-section>
                        <div class="text-h6">Add new card</div>
                      </q-card-section>

                      <q-card-section class="q-pt-none">
                          <form @submit.prevent="onUserSubmit">
                            <div class="form-group">
                              <q-input outlined v-model="name" label="Name"  :rules="[ val => val && val.length > 0 || 'Please type something']"/>
                            </div>
                            <div class="form-group">
                              <q-input outlined v-model="card_number" label="Card Number" />
                            </div>
                            <div class="form-group">
                                <q-input outlined v-model="cvv__number" label="CVV"
                               />
                            </div>
                             <q-card-actions align="right" class="text-primary">
                              <q-btn flat label="Add"  type="submit" />
                              <q-btn flat label="Close" v-close-popup />
                            </q-card-actions>
                            <!-- <button type="submit" class="btn btn-block btn-primary">Add</button> -->
                        </form> 
                      </q-card-section>
                    </q-card>
                  </q-dialog>
            
                </div>
            </div>
          </div>
          <q-card class="card__main">
            <q-tabs
              v-model="tab"
              dense
              class="text-grey"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab name="my__debit__cards" label="My debit cards" />
              <q-tab name="all__company__cards" label="All company cards" />
            </q-tabs>
            <!-- <q-separator /> -->
            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="my__debit__cards">
                <div class="q-pa-md">
                  <div class="row resposnive__row__content">
                    <div class="show_card_number"> 
                      <img src="../assets/images/eye__icon.svg" />
                      <span>Show card number</span>
                    </div>
                    <div class="col left_side_card">
                        <q-carousel
                          v-model="slide"
                          swipeable
                          animated
                          :navigation-position="navPos"
                          navigation
                          padding
                          height="300px"
                          class="text-white rounded-borders"
                        > 
                        <template v-for="(cardData,index) in cardsList" :key="index">
                          <q-carousel-slide :name="cardData.id" class="column no-wrap flex-center card__aspire_credits"  >
                             
                            <div class="card-front"> 
                             
                                <div class="card-view-container">
                                    <div class="asplogo">
                                        <img src="../assets/images/Aspire_Logo_wgite.svg" class="asplogo-img">
                                    </div>
                                    <div class="flexbox1">
                                        <div class=" col-sm-12 oncard">
                                            <div class="oncard-holder-name">{{cardData.name}}</div>
                                        </div>
                                        <div class="col-lg-12 oncard">
                                            <div class="oncard-cardnumb">{{cardData.card_number }}</div>
                                        </div>                        
                                        <div class="row oncard">
                                            <div class="col-sm-4 card-moyr">
                                                <span class="exp-day">Thur:</span>
                                                <span class="exp-month">12</span>
                                                <span>/</span>
                                                <span class="exp-year">21</span>
                                            </div>
                                            <div class="col-sm-4 card-cvv ">
                                                <span>CVV:</span> 
                                                <span class="cvv-box">{{cardData.cvv__number}}</span> 
                                                
                                            </div>
                                        </div>        
                                    </div>    
                                    <div class="visalogo">
                                        <img src="../assets/images/Visa_Logo_white.svg" class="visalogo-img">
                                    </div>       
                                </div>
                            </div>
                          </q-carousel-slide>
                        </template>
                   
                        </q-carousel>

                         <div class="cards__variants row">
                          <div class="col">
                            <img src="../assets/images/freeze_card.svg" />
                            <p>Freeze Card</p>
                          </div>
                          <div class="col">
                            <img src="../assets/images/Set_spend_limit.svg" />
                            <p>Set spend limit</p>
                          </div>
                          <div class="col">
                            <img src="../assets/images/GPay.svg" />
                            <p>Add to Gpay</p>
                          </div>
                          <div class="col">
                            <img src="../assets/images/Replace_card.svg" />
                            <p>Replace card</p>
                          </div>
                          <div class="col">
                            <img src="../assets/images/Deactivate_card.svg" />
                            <p>Cancel card</p>
                          </div>
                        </div>
                    </div>

                   
                    <div class="col right__side__card">
                      <!-- <div v-for="(cardData,index) in cardsList" :key="index">
                        <p>{{cardData.name}}</p>
                        <p>{{cardData.card_number}}</p>
                        <p>{{cardData.cvv__number}}</p>
                      </div>
                      <form @submit.prevent="onUserSubmit">
                          <div class="form-group">
                            <q-input outlined v-model="name" label="Name" />
                          </div>
                          <div class="form-group">
                             <q-input outlined v-model="card_number" label="Card Number" />
                          </div>
                           <div class="form-group">
                              <q-input outlined v-model="cvv__number" label="CVV" />
                          </div>
                          <button type="submit" class="btn btn-block btn-primary">Add</button>
                      </form> -->
                      <q-expansion-item
                        v-model="expandedCardDetails"
                        icon="account_balance_wallet"
                        label="Card details"
                        class="expansion__card__details"
                      >
                        <q-card>
                          <q-card-section>
                            <q-list>
                              <q-item clickable>
                                <q-item-section avatar>
                                  <!-- <q-icon color="primary" name="inventory_2" /> -->
                                  <img src="../assets/images/file-storage.svg" />
                                </q-item-section>

                                <q-item-section>
                                  <q-item-label>Bar XYZ</q-item-label>
                                  <q-item-label caption>Have a drink.</q-item-label>
                                </q-item-section>
                              </q-item>

                              <q-item clickable>
                                <q-item-section avatar>
                                  <!-- <q-icon color="red" name="local_gas_station" /> -->
                                  <img src="../assets/images/file-storage.svg" />
                                </q-item-section>

                                <q-item-section>
                                  <q-item-label>Gas Station</q-item-label>
                                  <q-item-label caption>Fill your gas tank.</q-item-label>
                                </q-item-section>
                              </q-item>

                              <q-item clickable>
                                <q-item-section avatar>
                                  <!-- <q-icon color="amber" name="local_movies" /> -->
                                  <img src="../assets/images/file-storage.svg" />
                                </q-item-section>

                                <q-item-section>
                                  <q-item-label>Cinema XYZ</q-item-label>
                                  <q-item-label caption>Watch a movie.</q-item-label>
                                </q-item-section>
                              </q-item>
                            </q-list>
                          </q-card-section>
                        </q-card>
                      </q-expansion-item>

                       <q-expansion-item
                        v-model="expandedRecentTransactions"
                        icon="swap_horiz"
                        label="Recent transaction"
                        class="expansion__card__details recent__details"
                      >
                        <q-card>
                          <q-card-section>
                                 <q-list>
                              <q-item clickable>
                                <q-item-section avatar>
                                  <div class="light_blue">
                                  <img src="../assets/images/file-storage.svg" />

                                  </div>
                                  <!-- <q-avatar color="light_blue" text-color="white" icon="inventory_2" /> -->
                                </q-item-section>

                                <q-item-section>
                                  <q-item-label>Hamleys</q-item-label>
                                  <q-item-label caption>20 may 2020</q-item-label>
                                  <div class="refund__debit">
                                  <q-icon color="primary" name="credit_card" class="refund__debit__icon"/>
                                  <span>Refund on debit card</span>
                                 </div>
                                </q-item-section>
                                  <q-item-section class="section__right">
                                 <p class="section_positive">+ S$ 150</p>
                                  <q-icon color="primary" name="chevron_right" class="chevron_right__expansion"/>
                                </q-item-section>
                              </q-item>

                              <q-item clickable>
                                <q-item-section avatar>
                                   <q-avatar color="light_green" text-color="white" icon="flight" />
                                </q-item-section>

                                <q-item-section>
                                  <q-item-label>Hamleys</q-item-label>
                                  <q-item-label caption>20 may 2020</q-item-label>
                                   
                                 <div class="refund__debit">
                                  <q-icon color="primary" name="credit_card" class="refund__debit__icon"/>
                                  <span>Charged to debit card</span>
                                 </div>
                                </q-item-section>
                               
                                <q-item-section class="section__right">
                                 <p>- S$ 150</p>
                                  <q-icon color="primary" name="chevron_right" class="chevron_right__expansion" />
                                </q-item-section>
                              </q-item>

                              <q-item clickable>
                                <q-item-section avatar>
                                   <q-avatar color="light_pink" text-color="white" icon="campaign" />
                                </q-item-section>

                                <q-item-section>
                                  <q-item-label>Hamleys</q-item-label>
                                  <q-item-label caption>20 may 2020</q-item-label>
                                    <div class="refund__debit">
                                  <q-icon color="primary" name="credit_card" class="refund__debit__icon"/>
                                  <span>Charged to debit card</span>
                                 </div>
                                </q-item-section>
                                 <q-item-section class="section__right">
                                 <p>- S$ 150</p>
                                  <q-icon color="primary" name="chevron_right" class="chevron_right__expansion" />
                                </q-item-section>
                              </q-item>
                                <q-item clickable>
                                <q-item-section avatar>
                                  <q-avatar color="light_blue" text-color="white" icon="inventory_2" />
                                </q-item-section>

                                <q-item-section>
                                  <q-item-label>Hamleys</q-item-label>
                                  <q-item-label caption>20 may 2020</q-item-label>
                                  <div class="refund__debit">
                                  <q-icon color="primary" name="credit_card" class="refund__debit__icon"/>
                                  <span>Charged to debit card</span>
                                 </div>
                                </q-item-section>
                                  <q-item-section class="section__right">
                                 <p class="section_positive">+ S$ 150</p>
                                  <q-icon color="primary" name="chevron_right" class="chevron_right__expansion"/>
                                </q-item-section>
                              </q-item>
                            </q-list>
                           
                          </q-card-section>
                           <div class="all__trans">
                              View all card transactions
                            </div>
                        </q-card>
                      </q-expansion-item>
                    </div>
                  </div>
                </div>
                </q-tab-panel>
                <q-tab-panel name="all__company__cards">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
            </q-tab-panels>
          </q-card>
        
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<style scoped>
  @import 'src/css/Layout.scss';
</style>
<script>
import { ref } from 'vue'

const menuList = [
  {
    image: 'Home.svg',
    label: 'Home',
    separator: false,
  },
  {
    image: 'card_menu.svg',
    label: 'Cards',
    separator: false,
  },
  {
    image: 'Payments.svg',
    label: 'Payments',
    separator: false
  },
  {
    image: 'Credit.svg',
    label: 'Credit',
    separator: false
  },
  {
    image: 'Account.svg',
    label: 'Settings',
    separator: false
  },
]

import { mapActions, mapGetters } from "vuex";
export default {
  name:'AddUser',
  setup () {
    return {
      drawer: ref(false),
      menuList,
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      inception: ref(false),
      secondDialog: ref(false),
      tab: ref('my__debit__cards'),
      expandedCardDetails: ref(false),
      expandedRecentTransactions: ref(true),
      name: '',
      card_number: '',
      cvv__number:'',
      slide: ref(1),
    }
  },
  methods:{
    ...mapActions(["addUsers"]),
    onUserSubmit() {
      if (this.name == '' || this.card_number == '' || this.cvv__number == '') {
        this.inception = true
      }
      else{  
        this.addUsers({
          name: this.name,
          card_number: this.card_number,
          cvv__number: this.cvv__number
        });
           this.inception = false
      }
        this.name= '',
        this.card_number= '',
        this.cvv__number= ''
    },
    ...mapActions(["fetchUsers", "deleteUser"])
  },
 
  computed: mapGetters(["cardsList"]),
    created() {
      this.fetchUsers()
    },
     filters: {
      formatCardNumber(value){
          return value ? (value.replace(/ /g, '')).match(/.{1,4}/g).join(' ') : '';
      } 
    },
}
</script>
