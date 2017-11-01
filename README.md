# advanced-react
Per lanciare i test: yarn test
Per compilare in un bundle: yarn webpack
Per lanciare il web server: yarn dev

poi andare su localhost:8080

altri comandi:
>yarn jest --updateSnapshot
>yarn upgrade-interactive

{/* ref={(input) => this.searchInput = input}  */}
 <input
        type="search"
        ref={(input) => this.searchInput = input}
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}    
      />