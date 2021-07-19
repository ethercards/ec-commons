# Common components for ether.cards



## Available components

At the moment we have 2 of them:
ECNav for navigation and a small ECAddress to display ethereum addresses in a fancy way.

### Developing

To start `yarn build-watch`. This runs rollup in watch mode.
In a new terminal you can run the playground app (`yarn start`), and import the components.

### Properties

#### ECNav

__projectUrl:__ This is a required property, it tells the componenet how to render the links. As external links, or react router links.

__onboard and address:__ Optional. If you want to display the connect button in the navigation bar, you need to pass the onboardjs instance and the connected wallet address (or null if is not connected yet)

`<ECNav projectUrl="https://explorer.ether.cards" onboard={onboard} address={address} />`

#### ECAddress

__address:__ an ethereum address

__short:__ shortened address displyay. Like 0xdead...beef. (bool)

__blockie:__ Display a blockie identicon. (bool)

__scale:__ Size of the identicon.(uint)


`<ECAddress address={address} short blockie scale={3} />`




