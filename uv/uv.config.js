self.__uv$config = {
    prefix: '/service/',

    /* Bare server URL */ 
    bare: 'https://tomp.app',
    
    encodeUrl: retS,
    decodeUrl: retS,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

function retS(S) {
    return S;
}
