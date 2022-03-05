const App = {
    data(){
        return {
            servers: [],
            name: ''
        }
    },
    async mounted() {
        const res = await fetch('/api/server')
        this.servers = await res.json()
    },
    methods: {
        async createServer(){
            const data = {
                name: this.name,
                status: 'created'
            }
            const response = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            })
            this.name = ''
            const newServer = await res.json()
            this.servers.push(newServer)
        }
    },
    async remove(id) {
        await fetch(`/api/servers/${id}`, {method: 'DELETE'})
        this.servers = this.servers.filter(s => s.id !== id)
    }
}

Vue.createApp(App).mount('#app')