module.exports = {
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#3583A5',
            'secondary': '#ffed4a',
            'danger': '#e3342f',
        }),
        gradientColorStops: theme => ({
            ...theme('colors'),
            'primary': '#3583A5',
            'secondary': '#779BAB',            
        }), 
        extend: {
            fontFamily: {
                sans: ['Quicksand'],
                display: ['Racing Sans One']
            },
        },        
    },
    plugins: [
      ],
      future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
      },


}

