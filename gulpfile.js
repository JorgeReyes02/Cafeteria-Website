const {src,dest,watch,series } =require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

function css(done){
    //compilar sass
    //pasos: 1 - identificar archivo
    //2 Compilarla
    //3 Guardar el .css

    src('src/scss/app.scss')
        .pipe( sass() )
        .pipe(postcss( [ autoprefixer() ] ))
        .pipe( dest('build/css') );
    
    done();    
}

function dev(){
    watch('src/scss/**/*.scss', css);
}
exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);