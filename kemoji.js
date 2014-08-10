(function($){

    KEmoji = {
        HTML_VALUE: 1,
        TEXT_VALUE: 2,
        count: 1,
        data: {},
        Create: function(options){
            var id = this.count++;
            this.data[id] = new Emoji(id, options);
        },
        GetById: function(id){
            return this.data[id];
        }
    };

    function Emoji(id, options)
    {
        this.id = id;
        var defaultOptions = {
            smiles: ["D83DDE0A","D83DDE03","D83DDE09","D83DDE06","D83DDE1C","D83DDE0B","D83DDE0D","D83DDE0E","D83DDE12","D83DDE0F","D83DDE14","D83DDE22","D83DDE2D","D83DDE29","D83DDE28","D83DDE10","D83DDE0C","D83DDE04","D83DDE07","D83DDE30","D83DDE32","D83DDE33","D83DDE37","D83DDE02","2764","D83DDE1A","D83DDE15","D83DDE2F","D83DDE26","D83DDE35","D83DDE20","D83DDE21","D83DDE1D","D83DDE34","D83DDE18","D83DDE1F","D83DDE2C","D83DDE36","D83DDE2A","D83DDE2B","263A","D83DDE00","D83DDE25","D83DDE1B","D83DDE16","D83DDE24","D83DDE23","D83DDE27","D83DDE11","D83DDE05","D83DDE2E","D83DDE1E","D83DDE19","D83DDE13","D83DDE01","D83DDE31","D83DDE08","D83DDC7F","D83DDC7D","D83DDC4D","D83DDC4E","261D","270C","D83DDC4C","D83DDC4F","D83DDC4A","270B","D83DDE4F","D83DDC43","D83DDC46","D83DDC47","D83DDC48","D83DDCAA","D83DDC42","D83DDC8B","D83DDCA9","2744","D83CDF4A","D83CDF77","D83CDF78","D83CDF85","D83DDCA6","D83DDC7A","D83DDC28","D83DDD1E","D83DDC79","26BD","26C5","D83CDF1F","D83CDF4C","D83CDF7A","D83CDF7B","D83CDF39","D83CDF45","D83CDF52","D83CDF81","D83CDF82","D83CDF84","D83CDFC1","D83CDFC6","D83DDC0E","D83DDC0F","D83DDC1C","D83DDC2B","D83DDC2E","D83DDC03","D83DDC3B","D83DDC3C","D83DDC05","D83DDC13","D83DDC18","D83DDC94","D83DDCAD","D83DDC36","D83DDC31","D83DDC37","D83DDC11","23F3","26BE","26C4","2600","D83CDF3A","D83CDF3B","D83CDF3C","D83CDF3D","D83CDF4B","D83CDF4D","D83CDF4E","D83CDF4F","D83CDF6D","D83CDF37","D83CDF38","D83CDF46","D83CDF49","D83CDF50","D83CDF51","D83CDF53","D83CDF54","D83CDF55","D83CDF56","D83CDF57","D83CDF69","D83CDF83","D83CDFAA","D83CDFB1","D83CDFB2","D83CDFB7","D83CDFB8","D83CDFBE","D83CDFC0","D83CDFE6","D83DDE38","D83DDE39","D83DDE3C","D83DDE3D","D83DDE3E","D83DDE3F","D83DDE3B","D83DDE40","D83DDE3A","23F0","2601","260E","2615","267B","26A0","26A1","26D4","26EA","26F3","26F5","26FD","2702","2708","2709","270A","270F","2712","2728","D83CDC04","D83CDCCF","D83CDD98","D83CDF02","D83CDF0D","D83CDF1B","D83CDF1D","D83CDF1E","D83CDF30","D83CDF31","D83CDF32","D83CDF33","D83CDF34","D83CDF35","D83CDF3E","D83CDF3F","D83CDF40","D83CDF41","D83CDF42","D83CDF43","D83CDF44","D83CDF47","D83CDF48","D83CDF5A","D83CDF5B","D83CDF5C","D83CDF5D","D83CDF5E","D83CDF5F","D83CDF60","D83CDF61","D83CDF62","D83CDF63","D83CDF64","D83CDF65","D83CDF66","D83CDF67","D83CDF68","D83CDF6A","D83CDF6B","D83CDF6C","D83CDF6E","D83CDF6F","D83CDF70","D83CDF71","D83CDF72","D83CDF73","D83CDF74","D83CDF75","D83CDF76","D83CDF79","D83CDF7C","D83CDF80","D83CDF88","D83CDF89","D83CDF8A","D83CDF8B","D83CDF8C","D83CDF8D","D83CDF8E","D83CDF8F","D83CDF90","D83CDF92","D83CDF93","D83CDFA3","D83CDFA4","D83CDFA7","D83CDFA8","D83CDFA9","D83CDFAB","D83CDFAC","D83CDFAD","D83CDFAF","D83CDFB0","D83CDFB3","D83CDFB4","D83CDFB9","D83CDFBA","D83CDFBB","D83CDFBD","D83CDFBF","D83CDFC2","D83CDFC3","D83CDFC4","D83CDFC7","D83CDFC8","D83CDFC9","D83CDFCA","D83DDC00","D83DDC01","D83DDC02","D83DDC04","D83DDC06","D83DDC07","D83DDC08","D83DDC09","D83DDC0A","D83DDC0B","D83DDC0C","D83DDC0D","D83DDC10","D83DDC12"],
            emojiDir: 'img/emoji'
        };

        options = jQuery.extend(defaultOptions, options);

        var $block = $(options.element);
        $block.addClass('Emoji_Block');
        $block.attr('emoji-id', id);

        var $input = $('<div class="Emoji_Input"><div contenteditable="true" tabindex="1"> </div></div>').appendTo($block).find('>div');

        var $cont = $('<div class="Emoji_Cont Emoji_Cont_Hidden" tabindex="-1" disabled="true" readonly="readonly"><div></div></div>').appendTo($block);

        (function($container){
            for(var i in options.smiles)
                $('<div class="Emoji_Smile" emoji="' + options.smiles[i] + '"><div><img src="' + options.emojiDir + '/' + options.smiles[i] + '.png" /></div></div>').appendTo($container);

            $container.append('<div class="Emoji_Clear"></div>');
        }($cont.find('>div')));

        var $showSmilesButton = $('<div class="Emoji_Smiles_Show_Button"><div></div></div>').appendTo($block);

        (function(elements){
            for(var i in elements){
                elements[i].attr({
                    unselectable: 'on',
                    onselectstart: 'return false;',
                    onmousedown: 'return false;'
                });
            }
        }([$cont, $showSmilesButton]));

        function insertSmileAtCursor(smile) {
            var el = document.createElement("IMG");
            el.src = options.emojiDir + '/' + smile + '.png';
            el.setAttribute('emoji', smile);

            if (window.getSelection) {
                var sel = window.getSelection();

                if (sel.getRangeAt && sel.rangeCount) {
                    var $currentInput = sel.focusNode.tagName ? $(sel.focusNode): $(sel.focusNode.parentNode);
                    var $currentBlock = $currentInput.parents('.Emoji_Block');

                    if(($currentInput.is($input) | $currentInput.is($input.parent())) && $currentBlock.is($block)){
                        var range = window.getSelection().getRangeAt(0);
                        range.insertNode(el);
                        SetCursorAfterElement(el);
                        return true;
                    }
                }
            }

            //Если браузер не поддерживает window.getSelection или не фокус направлен не на текстовое поле
            $input.append(el);
            SetCursorToEnd();
        }

        function SetCursorAfterElement(el)
        {
            var sel = window.getSelection();
            sel.removeAllRanges();
            var range = document.createRange();
            range.setStartAfter(el);
            sel.addRange(range);
        }

        function SetCursorToEnd() {
            var el = $input[0];

            el.focus();
            if (typeof window.getSelection != "undefined"
                && typeof document.createRange != "undefined") {
                var range = document.createRange();
                range.selectNodeContents(el);
                range.collapse(false);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }

        var smileContainerOffset = 20;

        $showSmilesButton.on('click', function(){
            toggleSmiles();
        });

        $cont.on('click', '.Emoji_Smile', function(){
            var smileId = $(this).attr('emoji');
            insertSmileAtCursor(smileId);
        });

        $cont.on('focus', function(e){
            e.stopPropagation();
        });

        function showSmiles()
        {
            $cont.css({
                top: -($cont.height() + smileContainerOffset), right: 0
            });
            $cont.fadeIn('slow').removeClass('Emoji_Cont_Hidden');;

            $(document).on('click.KEmojiDocument' + id, function(e){
                if(!$(e.target).parents('.Emoji_Block').is($block))
                    hideSmiles();
            });
        }

        function hideSmiles()
        {
            $(document).unbind('click.KEmojiDocument' + id);
            $cont.fadeOut('slow').addClass('Emoji_Cont_Hidden');
        }

        function toggleSmiles()
        {
            if($cont.hasClass('Emoji_Cont_Hidden'))
                showSmiles();
            else
                hideSmiles();
        }





        this.focus = function(cursorToEnd){
            $input.focus();
        };

        this.setWidth = function(width){
            $block.width(width);
        };

        this.setHeight = function(height){
            $block.height(height);
        };

        this.setSmileContainerWidth = function(width){
            $cont.find('>div').css('width', width);
        };

        this.setSmileContainerHeight = function(height){
            $cont.height(height);
        };

        this.setSmileContainerOffset = function(offset){
            smileContainerOffset = offset;
        };

        this.showSmiles = function(){
            showSmiles();
        };

        this.hideSmiles = function(){
            hideSmiles();
        };

        this.toggleSmiles = function(){
            toggleSmiles();
        };

        this.getValue = function(dataType){
            var val = $input.html();

            if(!dataType || dataType == KEmoji.TEXT_VALUE)
                return val.replace(/<img.*?emoji="(.*?)".*?>/g, " $#$1#$ ");
            else if(dataType == KEmoji.HTML_VALUE)
                return val;

            return null;
        };

        this.setValue = function(value, dataType){
            if(!dataType || dataType == KEmoji.TEXT_VALUE)
                $input.html(value.replace(/\$#(.*?)#\$/, '<img src="' + options.emojiDir + '/$1.png" emoji="$1">'));
            else if(dataType == KEmoji.HTML_VALUE)
                $input.html(value);
        }



        if(options.width) this.setWidth(options.width);
        if(options.height) this.setHeight(options.height);

        if(options.smileContainerWidth) this.setSmileContainerWidth(options.smileContainerWidth);
        if(options.smileContainerHeight) this.setSmileContainerHeight(options.smileContainerHeight);

    }


    jQuery.fn.KEmoji = function(options, arg){
        options = options?options:{};
        if(typeof options == 'object'){
            $.each($(this), function(i){
                options.element = this;
                if(!$(this).attr('emoji-id'))
                    KEmoji.Create(options);
            });
        }
        else if(typeof options == 'string'){
            var emoji = KEmoji.GetById($(this).attr('emoji-id'));

            if(options == 'api')
                return emoji;
            else if(options == 'val')
                if(arg)
                    return emoji.setValue(arg);
                else
                    return emoji.getValue();
            else if(options == 'valAsHtml')
                if(arg)
                    return emoji.setValue(arg, KEmoji.HTML_VALUE);
                else
                    return emoji.getValue(KEmoji.HTML_VALUE);

        }
    };

}(jQuery));
