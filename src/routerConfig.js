import Home from '../src/components/home/Home';
import Submit from '../src/components/home/Submit';
import SubmitNew from '../src/components/home/SubmitNew';
import Setting from '../src/components/home/Setting';
import PlanInfo from '../src/components/planInfo/index';
import Unit from '../src/components/home/Unit.vue';
import Production from '../src/components/home/Production.vue';
import Rejection from '../src/components/home/Rejection.vue';
import Downtime from '../src/components/home/Downtime.vue';
import Sop from '../src/components/home/Sop.vue';
import Plan from '../src/components/home/Plan.vue';
import Maint from '../src/components/home/Maint.vue';
const routes = [
  {
    path:'/',
    component:Home,
    children:[
      {
        path:'/',
        component:Submit,
      },
      {
        path:'submit',
        component:Submit,
      },
      {
        path:'setting',
        component:Setting,
      },
      {
        path:'unit',
        component:Unit,
      }
    ]
  },
  {
    path:'/home',
    component:Home,
    children:[
      {
        path:'/',
        component:Submit,
      },
      {
        path:'submit-new',
        component:SubmitNew,
      },
      {
        path:'submit',
        component:Submit,
      },
      {
        path:'setting',
        component:Setting,
      },
      {
        path:'unit',
        component:Unit,
      },
      {
        path:'production',
        component:Production,
      },
      {
        path:'rejection',
        component:Rejection,
      },
      {
        path:'downtime',
        component:Downtime,
      },
      {
        path:'sop',
        component:Sop,
      },
      {
        path:'plan',
        component:Plan,
      },
      {
        path:'maint',
        component:Maint,
      }
      
    ]
  },
  {
    path:'/plan-info',
    component:PlanInfo,
  },
]

export default { routes }