(function(){

    var count = 1;

    setTimeout(function(){
        try {
            document.execCommand("enableObjectResizing", false, false);
        }
        catch(e) {}
    }, 1);

    var k = function(){
        
        function getElementClassList(el)
        {
            return el.className?el.className.trim().split(' '):[];
        }
        
        function setElementClassList(el, classList)
        {
            el.className = classList.join(' ').trim();
        }

        return {
            extend: function(object, object2){
                var merged = object;
                for(var key in object2)
                    merged[key] = object2[key];
                return merged;
            },
            addClass: function(el, classname){
                if(typeof classname == 'object'){
                    for(var i = 0; i != classname.length; i++)
                        this.addClass(el, classname[i]);
                    return ;
                }
                var classList = getElementClassList(el);
                if(classList.indexOf(classname) == -1){
                    classList.push(classname);
                    setElementClassList(el, classList);
                }
            },
            removeClass: function(el, classname){
                if(typeof classname == 'object'){
                    for(var i = 0; i != classname.length; i++)
                        this.removeClass(el, classname[i]);
                    return ;
                }
                var classList = getElementClassList(el);
                var index = classList.indexOf(classname);
                if(index > -1){
                    delete classList[index];
                    setElementClassList(el, classList);
                }
            },
            hasClass: function(el, classname){
                var classList = getElementClassList(el);
                return classList.indexOf(classname) > -1 ?true: false;
            },
            attr: function(el, key, value){
                if(typeof key == 'object')
                    for(var k in key)
                        this.attr(el, k, key[k]);
                else
                    if(key && value)
                        el.setAttribute(key, value);
                    else if(key)
                        return el.getAttribute(key);

                return null;
            },
            append: function(el, html){
                el.innerHTML+= html;
            },
            parent: function(el){
                return el.parentElement;
            },
            parentsByClass: function(el, classname){
                el = el.parentElement;
                if(el){
                    while(el.tagName != "BODY"){
                        var classList = getElementClassList(el);
                        if(classList.indexOf(classname) > -1)
                            return el;
                        el = el.parentElement;
                    }
                }
                return false;
            },
            on: function(el, eventname, callback){
                el.addEventListener(eventname, callback, false);
            }
        };
    }();

    function EmojiArray()
    {
        this.add = function(emojiHandle){
            this.push(emojiHandle);
        };
    }

    EmojiArray.prototype = Array.prototype;


    window.KEmoji = {
        HTML_VALUE: 1,
        TEXT_VALUE: 2,
        count: 1,
        data: {},
        _init: function(element, options){
            var id = count++;
            this.data[id] = new Emoji(element, id, options);
            return this.data[id];
        },
        init: function(elementId, options){
            return this._init(document.getElementById(elementId), options);
        },
        initByClass: function(className, options){
            var elements = document.getElementsByClassName(className),
                emojiList = new EmojiArray();

            for(var i = 0; i != elements.length; i++){
                emojiList.add(this._init(elements[i], options));
            }

            return emojiList;
        },
        getByEmojiId: function(id){
            return this.data[id];
        },
        getByElement: function(element){
            var emojiId = k.attr(element, 'emoji-id');
            if(emojiId)
                return this.getByEmojiId(emojiId);
            return null;
        }
    };
    

    function Emoji(KEmojiElement, id, options)
    {
        this.id = id;
        var defaultOptions = {
            maxHeight: 200,
            autoresize: false,
            smiles: ["D83DDE0A","D83DDE03","D83DDE09","D83DDE06","D83DDE1C","D83DDE0B","D83DDE0D","D83DDE0E","D83DDE12","D83DDE0F","D83DDE14","D83DDE22","D83DDE2D","D83DDE29","D83DDE28","D83DDE10","D83DDE0C","D83DDE04","D83DDE07","D83DDE30","D83DDE32","D83DDE33","D83DDE37","D83DDE02","2764","D83DDE1A","D83DDE15","D83DDE2F","D83DDE26","D83DDE35","D83DDE20","D83DDE21","D83DDE1D","D83DDE34","D83DDE18","D83DDE1F","D83DDE2C","D83DDE36","D83DDE2A","D83DDE2B","263A","D83DDE00","D83DDE25","D83DDE1B","D83DDE16","D83DDE24","D83DDE23","D83DDE27","D83DDE11","D83DDE05","D83DDE2E","D83DDE1E","D83DDE19","D83DDE13","D83DDE01","D83DDE31","D83DDE08","D83DDC7F","D83DDC7D","D83DDC4D","D83DDC4E","261D","270C","D83DDC4C","D83DDC4F","D83DDC4A","270B","D83DDE4F","D83DDC43","D83DDC46","D83DDC47","D83DDC48","D83DDCAA","D83DDC42","D83DDC8B","D83DDCA9","2744","D83CDF4A","D83CDF77","D83CDF78","D83CDF85","D83DDCA6","D83DDC7A","D83DDC28","D83DDD1E","D83DDC79","26BD","26C5","D83CDF1F","D83CDF4C","D83CDF7A","D83CDF7B","D83CDF39","D83CDF45","D83CDF52","D83CDF81","D83CDF82","D83CDF84","D83CDFC1","D83CDFC6","D83DDC0E","D83DDC0F","D83DDC1C","D83DDC2B","D83DDC2E","D83DDC03","D83DDC3B","D83DDC3C","D83DDC05","D83DDC13","D83DDC18","D83DDC94","D83DDCAD","D83DDC36","D83DDC31","D83DDC37","D83DDC11","23F3","26BE","26C4","2600","D83CDF3A","D83CDF3B","D83CDF3C","D83CDF3D","D83CDF4B","D83CDF4D","D83CDF4E","D83CDF4F","D83CDF6D","D83CDF37","D83CDF38","D83CDF46","D83CDF49","D83CDF50","D83CDF51","D83CDF53","D83CDF54","D83CDF55","D83CDF56","D83CDF57","D83CDF69","D83CDF83","D83CDFAA","D83CDFB1","D83CDFB2","D83CDFB7","D83CDFB8","D83CDFBE","D83CDFC0","D83CDFE6","D83DDE38","D83DDE39","D83DDE3C","D83DDE3D","D83DDE3E","D83DDE3F","D83DDE3B","D83DDE40","D83DDE3A","23F0","2601","260E","2615","267B","26A0","26A1","26D4","26EA","26F3","26F5","26FD","2702","2708","2709","270A","270F","2712","2728","D83CDC04","D83CDCCF","D83CDD98","D83CDF02","D83CDF0D","D83CDF1B","D83CDF1D","D83CDF1E","D83CDF30","D83CDF31","D83CDF32","D83CDF33","D83CDF34","D83CDF35","D83CDF3E","D83CDF3F","D83CDF40","D83CDF41","D83CDF42","D83CDF43","D83CDF44","D83CDF47","D83CDF48","D83CDF5A","D83CDF5B","D83CDF5C","D83CDF5D","D83CDF5E","D83CDF5F","D83CDF60","D83CDF61","D83CDF62","D83CDF63","D83CDF64","D83CDF65","D83CDF66","D83CDF67","D83CDF68","D83CDF6A","D83CDF6B","D83CDF6C","D83CDF6E","D83CDF6F","D83CDF70","D83CDF71","D83CDF72","D83CDF73","D83CDF74","D83CDF75","D83CDF76","D83CDF79","D83CDF7C","D83CDF80","D83CDF88","D83CDF89","D83CDF8A","D83CDF8B","D83CDF8C","D83CDF8D","D83CDF8E","D83CDF8F","D83CDF90","D83CDF92","D83CDF93","D83CDFA3","D83CDFA4","D83CDFA7","D83CDFA8","D83CDFA9","D83CDFAB","D83CDFAC","D83CDFAD","D83CDFAF","D83CDFB0","D83CDFB3","D83CDFB4","D83CDFB9","D83CDFBA","D83CDFBB","D83CDFBD","D83CDFBF","D83CDFC2","D83CDFC3","D83CDFC4","D83CDFC7","D83CDFC8","D83CDFC9","D83CDFCA","D83DDC00","D83DDC01","D83DDC02","D83DDC04","D83DDC06","D83DDC07","D83DDC08","D83DDC09","D83DDC0A","D83DDC0B","D83DDC0C","D83DDC0D","D83DDC10","D83DDC12"]
        };

        options = k.extend(defaultOptions, options);

        k.addClass(KEmojiElement, 'KEmoji_Block');
        k.attr(KEmojiElement, 'emoji-id', id);

        var inputElementContainer = document.createElement('div');
        inputElementContainer.innerHTML = '<div contenteditable="true" tabindex="1"> </div>';
        k.addClass(inputElementContainer, 'KEmoji_Input');

        var inputElement = inputElementContainer.firstElementChild;

        KEmojiElement.appendChild(inputElementContainer);

        var smilesContainerElement = document.createElement('div');

        k.addClass(smilesContainerElement, ['KEmoji_Cont', 'KEmoji_Cont_Hidden']);
        k.attr(smilesContainerElement, {
            'tabindex': '-1',
            'readonly': 'readonly'
        });
        smilesContainerElement.innerHTML = '<div></div>';

        for(var i in options.smiles)
            k.append(smilesContainerElement.firstElementChild, '<div class="KEmoji_Smile" emoji="' + options.smiles[i] + '"><div><i class="ke ke-' + options.smiles[i] + '"></i></div></div>');

        k.append(smilesContainerElement.firstElementChild, '<div class="KEmoji_Clear"></div>');

        KEmojiElement.appendChild(smilesContainerElement);

        var bottomTollbarElement = document.createElement('div');
        k.addClass(bottomTollbarElement, 'KEmoji_TollBar');

        var showSmilesButtonElement = document.createElement('div');
        k.addClass(showSmilesButtonElement, 'KEmoji_Smiles_Show_Button');
        showSmilesButtonElement.innerHTML = '<div></div>';

        bottomTollbarElement.appendChild(showSmilesButtonElement);

        KEmojiElement.appendChild(bottomTollbarElement);

        (function(elements){
            for(var i = 0; i != elements.length; i++)
                k.attr(elements[i], {
                    unselectable: 'on',
                    onselectstart: 'return false;',
                    onmousedown: 'return false;'
                });
        }([showSmilesButtonElement, smilesContainerElement]));


        function insertSmileAtCursor(smile) {
            var img = document.createElement("IMG");
            k.attr(img, 'src', 'img/opacity.png');
            k.addClass(img, 'ke');
            k.addClass(img, 'ke-' + smile);
            k.attr(img, 'emoji', smile);

            if("onresizestart" in img) // IE
                img.onresizestart = function() { return false; };

            if (window.getSelection) {
                var sel = window.getSelection();

                if (sel.getRangeAt && sel.rangeCount) {
                    var currentInputElement = sel.focusNode.tagName ? sel.focusNode: sel.focusNode.parentNode;
                    var currentBlockElement = k.parentsByClass(currentInputElement, 'KEmoji_Block');

                    if((currentInputElement == inputElement | currentInputElement == inputElementContainer)
                        && currentBlockElement == KEmojiElement){
                        var range = window.getSelection().getRangeAt(0);
                        range.insertNode(img);
                        SetCursorAfterElement(img);
                        return true;
                    }
                }
            }

            //Если браузер не поддерживает window.getSelection или не фокус направлен не на текстовое поле
            inputElement.appendChild(img);
            SetCursorToEnd();
        }

        function GetRange()
        {
            if(document.getSelection){
                var sel = document.getSelection();
                if(sel.rangeCount > 0)
                    return sel.getRangeAt(0);
            }

            return false;
        }
        function SetRange(range)
        {
            if(document.getSelection){
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }

        }

        function SetCursorAfterElement(el)
        {
            var range = document.createRange();
            range.setStartAfter(el);
            range.setEndAfter(el);
            SetRange(range);
        }

        function SetCursorToEnd() {
            inputElement.focus();
            if (window.getSelection && document.createRange) {
                var range = document.createRange();
                range.selectNodeContents(inputElement);
                range.collapse(false);
                SetRange(range);
            }
        }

        k.on(showSmilesButtonElement, 'click', function(){
            toggleSmiles();
        });

        k.on(smilesContainerElement, 'click', function(e){
            var smileElement = k.parentsByClass(e.target, 'KEmoji_Smile');
            if(smileElement){
                var smileId = k.attr(smileElement, 'emoji');
                insertSmileAtCursor(smileId);
            }
        });

        k.on(inputElement, 'paste', function(e){
            var text = '';

            if (e.clipboardData)
                text = e.clipboardData.getData('text/plain');
            else if (window.clipboardData)
                text = window.clipboardData.getData('Text');
            else if (e.originalEvent.clipboardData)
                text = document.createTextNode(e.originalEvent.clipboardData.getData('text'))

            if (document.queryCommandSupported('insertText')) {
                document.execCommand('insertHTML', false, text.innerText.replace(/\n/g, '<br>'));
                return false;
            }
            else { // IE > 7
                var childs = inputElement.getElementsByTagName('*');
                for(var i = 0; i != childs.length; i++){
                    k.addClass(childs[i], 'within');
                }
                setTimeout(function () {
                    var childs = inputElement.getElementsByTagName('*');
                    for(var i = 0; i != childs.length; i++){
                        if(!k.hasClass(childs[i], 'within')){
                            childs[i].innerText = childs[i].innerHTML;
                        }
                    }
                }, 1);
            }
        });

        k.on(inputElement, 'keypress', function(e){
            if(e.keyCode==13){ //enter && shift

                e.preventDefault(); //Prevent default browser behavior
                if (window.getSelection) {
                    var selection = window.getSelection(),
                        range = GetRange(),
                        br = document.createElement("br"),
                        textNode = document.createTextNode("\u00a0"); //Passing " " directly will not end up being shown correctly
                    range.deleteContents();//required or not?
                    range.insertNode(br);
                    range.collapse(false);
                    range.insertNode(document.createElement("br"));

                    SetRange(range);
                    return false;
                }

            }
        });

        k.on(inputElement, 'click', function(e){
            if(k.hasClass(e.target, 'ke'))
                SetCursorAfterElement(e.target);
        });


        var smilesContainerIsShowed = false,
            smileContainerOffset = 48;

        function showSmiles()
        {
            smilesContainerElement.style.display = "block";
            var height = smilesContainerElement.offsetHeight;
            smilesContainerElement.style.display = "none";

            smilesContainerElement.style.bottom = '-' + (height + smileContainerOffset) + 'px';
            smilesContainerElement.style.right = '-20px';
            smilesContainerElement.style.display = "block";

            smilesContainerIsShowed = true;
        }

        k.on(document, 'click', function(e){
            if(smilesContainerIsShowed == true){
                var blockparent = k.parentsByClass(e.target, 'KEmoji_Block');
                if(blockparent != KEmojiElement)
                    hideSmiles();
            }
        });

        function hideSmiles()
        {
            smilesContainerElement.style.display = 'none';
            smilesContainerIsShowed = false;
        }

        function toggleSmiles()
        {
            if(smilesContainerIsShowed == false)
                showSmiles();
            else
                hideSmiles();
        }


        this.focus = function(){
            KEmojiElement.focus();
        };

        this.setWidth = function(width){
            KEmojiElement.style.width = width + 'px';
        };

        this.setHeight = function(height){
            KEmojiElement.style.height = height + 'px';
        };

        this.setSmileContainerWidth = function(width){
            smilesContainerElement.firstElementChild.style.width = width + 'px';
        };

        this.setSmileContainerHeight = function(height){
            smilesContainerElement.style.height = height + 'px';
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
            var val = inputElement.innerHTML

            if(!dataType || dataType == KEmoji.TEXT_VALUE)
                return val.replace(/<img.*?class="ke ke-(.*?)".*?>/g, " $#$1#$ ");
            else if(dataType == KEmoji.HTML_VALUE)
                return val;

            return null;
        };

        this.setValue = function(value, dataType){
            if(!dataType || dataType == KEmoji.TEXT_VALUE)
                inputElement.innerHTML = value.replace(/\$#(.*?)#\$/g, '<img src="img/opacity.png" onresizestart="return false" class="ke ke-$1">');
            else if(dataType == KEmoji.HTML_VALUE)
                inputElement.innerHTML = value;
        }

        if(options.width) this.setWidth(options.width);
        if(options.height) this.setHeight(options.height);

        if(options.smileContainerWidth) this.setSmileContainerWidth(options.smileContainerWidth);
        if(options.smileContainerHeight) this.setSmileContainerHeight(options.smileContainerHeight);

    }

}());
