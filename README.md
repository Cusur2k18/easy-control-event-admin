## dat-admin platform

### Installation

First clone the repo:

```bash
git clone
```

Then install the dependencies

```bash
npm install && yarn install
```

After that create a '.env` in the root directory file with the following;

```
BASE_API_URL=<API_URL>,
CLOUDINARY_CLOUD_NAME=<CLOUDINARY_CLOUD_NAME>,
CLOUDINARY_PRESET=<CLOUDINARY_PRESET>
```

Now just run:

```bash
npm start
```

this will start a development server on `localhost:5000`

> **NOTE:** in order to see everything working, you should have the [API](https://github.com/Cusur2k18/diploma-admin-tool) running also.
