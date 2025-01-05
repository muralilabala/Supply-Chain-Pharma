## Pharma Supply Chain Execution Guide:

#### Step-1:
Installation of required setup,

Ganache, Node.js from google chrome.

Ganache: https://archive.trufflesuite.com/ganache/  <br>
Node.js: https://nodejs.org/en

#### Step-2:

Installing truffle,
After installing both node and ganache, open cmd and check node version by `node --version`
Then install this truffle using this command : `npm install -g truffle`
You check your installation using `truffle --version`

After that install & setup MetaMask wallet in chrome.

#### Step-3:

Open ganache and start with QuickStart.
Copy RPC server address and open the source code in vs code editor.
Open truffle-config.js and go to development section,
Set the RPC server address in host and port, as before colon in host and after in the port.
Similarly network id from the ganache and save the file.

#### Step-4:

Open metamask wallet and add new custom network.

In the Default RPC URL, paste ganache RPC Server URL and chain id as `1337`.
then remaining columns will suggest their names automatically.
Save the custom network.

#### Step-5:

open command prompt and change directory to this source code folder.
Now compile it using truffle, `truffle compile`.
and migrate it using command `truffle migrate`.

While migrating, ganache should be kept running.

After that for installing dependencies, use `npm i` command.

#### Step-6:

Now open ganache and add each account into metamask by using private key.

Private key is shown in key symbol of every account in ganache.

#### Step-7:

Now change directory to client, `cd client`.
then again use `npm i` for any dependencies to be installed.
and start server using `npm start`.

Your localhost webpage will opened in any browser.<br>
Note: Browser should contain metamask to run.
