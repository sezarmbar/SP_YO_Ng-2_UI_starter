import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';
import { Transition } from '@uirouter/angular';

export const helloState = { name: 'hello', url: '/hello', component: HelloComponent }
export const aboutState = { name: 'about', url: '/about', component: AboutComponent }