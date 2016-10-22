(function($){'use strict';$('.responsive-image-1.ff-block, .responsive-image-2.ff-block').each(function(index){$(this).addClass('fresponsive-image-1--id--'+index);var this_block='.fresponsive-image-1--id--'+index+'.ff-block';var $this_block=$(this_block);function isRetina(){var root=(typeof exports=='undefined'?window:exports);var mediaQuery="(-webkit-min-device-pixel-ratio: 1.5),\
         (min--moz-device-pixel-ratio: 1.5),\
         (-o-min-device-pixel-ratio: 3/2),\
         (min-resolution: 1.5dppx)";if(root.devicePixelRatio>1){return true;}
if(root.matchMedia&&root.matchMedia(mediaQuery).matches){return true;}
return false;}
var DpiType;if(isRetina()){DpiType='2x';}else{DpiType='1x';}
switch($('.breakpoint').width()){case 1:$this_block.attr('src',$this_block.attr('data-src-xs-'+DpiType));break;case 2:$this_block.attr('src',$this_block.attr('data-src-sm-'+DpiType));break;case 3:$this_block.attr('src',$this_block.attr('data-src-md-'+DpiType));break;case 4:$this_block.attr('src',$this_block.attr('data-src-lg-'+DpiType));break;}
$this_block.removeAttr('data-src-xs-1x');$this_block.removeAttr('data-src-xs-2x');$this_block.removeAttr('data-src-sm-1x');$this_block.removeAttr('data-src-sm-2x');$this_block.removeAttr('data-src-md-1x');$this_block.removeAttr('data-src-md-2x');$this_block.removeAttr('data-src-lg-1x');$this_block.removeAttr('data-src-lg-2x');});})(jQuery);