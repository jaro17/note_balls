import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
	{
		path: '/',
		name: 'notes',
		component: ViewNotes
	}
		]
})

createApp(App)
	.use(router)
	.mount('#app')
