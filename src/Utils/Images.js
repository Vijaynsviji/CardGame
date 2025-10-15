

export const AvatarImagesLink = [
    "https://i.pinimg.com/1200x/76/4d/73/764d73cb49c3dac16cce4794d914a1f4.jpg",
    "https://i.pinimg.com/736x/5b/a3/28/5ba32884d861e9556ef3417e8f05c0f6.jpg",
    "https://i.pinimg.com/736x/c3/51/57/c351576a2ac5bbfaac3155233ac61e62.jpg",
    "https://i.pinimg.com/1200x/6a/dc/ae/6adcae190ca5ef23cbd870910c11d373.jpg",
    "https://i.pinimg.com/736x/48/05/41/480541ef5e5d017d4f193b34fdd95224.jpg",
    "https://i.pinimg.com/736x/13/51/40/135140dbbf74b0ddee7196c205bb56c8.jpg",
    "https://i.pinimg.com/736x/2b/39/9f/2b399f7815cd963fe7d70f654188fc94.jpg",
    "https://i.pinimg.com/736x/4b/8b/4f/4b8b4f657c174570ed2cd88ac5a49ba5.jpg",
    "https://i.pinimg.com/736x/ef/13/06/ef1306ce2d476da553c62d21ed0f531b.jpg",
    "https://i.pinimg.com/736x/df/b6/e7/dfb6e745ce3adbea161eb0258e1fa5ab.jpg",
    "https://i.pinimg.com/736x/14/12/47/141247d53004a3b89aeffb85e4ea6481.jpg",
    "https://i.pinimg.com/1200x/67/d8/b1/67d8b1bbe01eb55e2ef8cf8c9f213170.jpg",
    "https://i.pinimg.com/1200x/20/af/e5/20afe56302268d82673d9a8ff2699be8.jpg",
    "https://i.pinimg.com/736x/d5/e9/ed/d5e9edcc7b517188e1067d5fd3d113aa.jpg",
    "https://i.pinimg.com/736x/f5/c4/20/f5c420ad9490567ac24c9d0971c06990.jpg",
    "https://i.pinimg.com/1200x/1a/e6/7d/1ae67dca3fb24a200931f8f2bd2c9aa7.jpg",
    "https://i.pinimg.com/736x/a8/1f/38/a81f389dff40ce41613283d4d2caea6d.jpg",
    "https://i.pinimg.com/736x/ca/43/c8/ca43c839a9e7179d290a0f53d037f1ea.jpg"
]


export const GameImageLink = [
    "https://i.pinimg.com/736x/5a/c1/a8/5ac1a89109568d6baa45f8980a53b9cc.jpg",
    "https://i.pinimg.com/736x/36/05/5d/36055d245237a39f8aec4a4de331d8e9.jpg",
    "https://i.pinimg.com/736x/d4/fd/20/d4fd208b22756541fe0e9db3ba96ced4.jpg",
    "https://i.pinimg.com/736x/b5/a1/ee/b5a1ee815c78fa94af4ad4fce631278a.jpg",
    "https://i.pinimg.com/736x/a9/4d/83/a94d83aaf7215b586b9a293c8ec0dca7.jpg",
    "https://i.pinimg.com/1200x/c7/0e/90/c70e90bb79a99fa72d5c1540300bdfe7.jpg",
    "https://i.pinimg.com/736x/63/88/dd/6388dd5e089317f85c69bb86a59989ea.jpg",
    "https://i.pinimg.com/736x/a4/a5/4a/a4a54a270eb6997b81cc6cbf0171e555.jpg",
    "https://i.pinimg.com/1200x/0a/84/d7/0a84d717fba2d97f44715cd3a47182de.jpg",
    "https://i.pinimg.com/736x/e3/ba/00/e3ba00dc6458d7163ec8fd5a7d23f1c6.jpg"
]


export const getRandomGameImage = ()=>{
    let num = Math.round(Math.random() * GameImageLink.length);
    return GameImageLink[num];
}

export const getRandomAvatarImage = ()=>{
        let num = Math.round(Math.random() * AvatarImagesLink.length);
    return AvatarImagesLink[num];
}