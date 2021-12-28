
const {src,dest,watch,series } =require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

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
function imagenes(done){
    src('src/img/**/*')
        .pipe(imagemin({optimizationLevel:3}))
        .pipe(dest('build/img'));
    
    done();     
}

function versionWebp(){
    return src('src/img/**/*.{png,jpg}')
        .pipe(wepb())
        .pipe(dest('build/img'));
}
 

function dev(){
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*',imagenes);
}
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp =versionWebp;
exports.default = series(imagenes,css, dev);