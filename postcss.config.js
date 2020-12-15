module.exports = {
    plugins: [
        'tailwindcss',
        process.env.NODE_ENV === 'production'
            ? [
                '@fullhuman/postcss-purgecss',
                {
                },
            ]
            : undefined,
        'autoprefixer'
    ],
}