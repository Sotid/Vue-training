import {createStore} from 'vuex';

import coachesModule from './modules/coaches/index';
import requestModule from './modules/requests/index';


 const store = createStore({

    modules: {
        coaches:coachesModule,
        requests:requestModule
    }


})

export default store;