export default function assetsURL (image, {width,height}) { 
return `https://ead.educaflix.com.br/assets/components/rdmc/rdmc.php?src=https://ead.educaflix.com.br/upload/plan/${image}&w=${width}&h=${height}&q=100`;
}