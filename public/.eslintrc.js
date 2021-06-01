module.exports = {
    root:true,
    env:{
        node:true,
        browser:true,
        es6:true
    },
    extends:['plugin:vue/essential','eslint:recommended'],
    rules:{
        'no-debugger': 'off',
        'vue/html-self-closing': 'off',
    }
}