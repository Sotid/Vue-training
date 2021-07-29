import {createrRouter,createWebHistory} from 'vue-router'

import CoachDetails from './pages/coaches/CoachDetails.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import ContactCoaches from './pages/requests/ContactCoaches.vue'
import RequestsReceived from './pages/requests/RequestsReceived.vue'
import NotFound from './pages/NotFound.vue'

const router = createrRouter({
history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'}, ///Redirect from /

        {path: '/coaches', component:CoachesList},
        {path: '/coaches/:id', component:CoachDetails, children: [
            {path: 'contact', component:ContactCoaches}, ///Nested route so as to get the id /coaches/id/contact

        ] },
        {path: '/register', component:CoachRegister},

    {path: '/requests', component:RequestsReceived},
    {path: '/:notFound(.*)', component:NotFound}, ///For any other endpoint

    ]
})

export default router;