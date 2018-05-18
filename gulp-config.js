module.exports = function () {
  var projectDir = process.env.PWD = process.cwd() + '/',
    srcDir = 'src/',
    distDir = 'www/';

  var pipelines = {
    styles: {
      src: [srcDir + 'styles/common.scss'],
      dest: distDir
    },
  };
  return pipelines;
};
