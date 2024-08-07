var $gf = $;
$gf(document).ready(function() {
    $gf('body').on('click', '#refresh-google-fonts', function() {
        $gf(this).next('.spinner').css({ 'display': 'inline-block', 'float': 'none', 'vertical-align': 'middle' });
        var data = {
            action: 'ultimate_google_fonts_refresh',
        };
        // since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
        $gf.post(ajaxurl, data, function(response) {
            var object = jQuery.parseJSON(response);
            var count = object.count;
            var msg = object.message;
            if (count == 0) {
                var dmsg = msg;
            } else {
                var dmsg = msg + ' Please wait, Page is reloading.';
                window.location.reload(true);
            }
            $gf('#vc-gf-msg').html('<div class="updated">' + dmsg + '</div>').hide();
            $gf('#vc-gf-msg').slideDown(300);
            $gf('#refresh-google-fonts').next('.spinner').css({ 'display': 'none' });
            setTimeout(function() {
                $gf('#vc-gf-msg').slideUp(300);
            }, 4000);
        });
    });
    $gf('body').on('click', '.add-google-font', function() {
        var button = $gf(this);
        var font_family = $gf(this).attr('data-font_family');
        var font_name = $gf(this).attr('data-font_name');
        if (!button.hasClass('font-added')) {
            button.next('.spinner').show();
            button.next('.spinner').addClass('fspinner-show').css({ 'float': 'right' });

            var variants_array = new Array();
            var subsets_array = new Array();
            button.parent().find('.variants').find('.font-variant').each(function(iv, variant) {
                $v = $gf(variant);
                var temp_arr = {};
                var variant_value = $v.find('.font-variant-inputs').val();
                temp_arr['variant_value'] = variant_value;
                if ($v.find('.font-variant-inputs').is(':checked')) {
                    temp_arr['variant_selected'] = true;
                } else {
                    temp_arr['variant_selected'] = false;
                }
                variants_array.push(temp_arr);
            });
            button.parent().find('.subsets').find('.font-subset').each(function(iv, subset) {
                $s = $gf(subset);
                var temp_arr = {};
                var subset_value = $s.find('.font-subset-inputs').val();
                temp_arr['subset_value'] = subset_value;
                if ($s.find('.font-subset-inputs').is(':checked')) {
                    temp_arr['subset_selected'] = true;
                } else {
                    temp_arr['subset_selected'] = false;
                }
                subsets_array.push(temp_arr);
            });
            var data = {
                action: 'add_google_font',
                font_family: font_family,
                font_name: font_name,
                variants: variants_array,
                subsets: subsets_array
            };
            $gf.post(ajaxurl, data, function(response) {
                //console.log(response);
                button.next('.spinner').removeClass('fspinner-show').hide();
                button.val('Added in collection');
                button.addClass('font-added');
                //if(variants_array.length > 0)
                if (variants_array.length > 0 || subsets_array.length > 0)
                    var xclass = 'have-variants';
                else
                    var xclass = '';

                var gshtml = '<div class="selected-font"><div class="selected-font-top fopened ' + xclass + '"><div class="font-header" style="font-family:\'' + font_name + '\'">' + font_name + '</div>';
                if (variants_array.length > 0)
                    gshtml += '<i class="dashicons dashicons-arrow-down"></i>';
                gshtml += '<div class="clear"></div></div><span class="font-delete" data-font_name="' + font_name + '"><i class="icon-trash"></i></span>';

                if (variants_array.length > 0 || subsets_array.length > 0) {
                    gshtml += '<div class="selected-font-content" style="display:block">';

                    if (temp = font_name.split(' ')) {
                        var ctemp = temp.length;
                        var temp_id = '';
                        $gf.each(temp, function(i, val) {
                            temp_id += val;
                            if ((ctemp - 1) != i)
                                temp_id += '-';
                        })
                    } else
                        var temp_id = font_name;

                    var temp_subset_class = '';

                    if (variants_array.length > 0) {
                        gshtml += '<div class="selected-font-varient-wrapper">';
                        $gf.each(variants_array, function(index, variant) {
                            var lid = temp_id + '-dynamic-' + variant.variant_value + '-' + index;
                            var font_style = 'font-family:\'' + font_name + '\';';
                            if (/italic/i.test(variant.variant_value)) {
                                font_style += 'font-style:italic;';
                            }
                            var weight = 'normal';
                            if (weight = variant.variant_value.match(/\d+/)) {
                                font_style += 'font-weight:' + weight + ';';
                            }
                            gshtml += '<span class="font-variant"><input type="checkbox" id="' + lid + '" value="' + variant.variant_value + '" class="selected-variant-checkbox" /><label style="' + font_style + '" for="' + lid + '">' + variant.variant_value + '</label></span>';
                        });
                        gshtml += '</div>';
                        temp_subset_class = 'selected-font-subset-wrapper';
                    }

                    if (subsets_array.length > 0) {
                        gshtml += '<div class="' + temp_subset_class + '">';
                        $gf.each(subsets_array, function(index, subset) {
                            var lid = temp_id + '-dynamic-subset-' + subset.subset_value + '-' + index;
                            gshtml += '<span class="font-subset"><input type="checkbox" id="' + lid + '" value="' + subset.subset_value + '" class="selected-subset-checkbox" /><label for="' + lid + '">' + subset.subset_value + '</label></span>';
                        });
                        gshtml += '</div>';
                    }

                    gshtml += '<input type="button" class="button alignleft update-google-font-button  btn btn-default btn btn-default" value="Update font" data-font_name="' + font_name + '" /><span class="spinner fspinner"><i class="icon-refresh icon-spin icon-fw"></i></span><div class="clear"></div></div>';
                }

                gshtml += '</div>';
                $gf('#fonts-selected-wrapper').prepend(gshtml);
            });
        }
    });
    $gf('body').on('click', '.font-delete', function() {
        $gf('.google-font-overlay').remove();
        $gf('.google-font-confirmation').remove();
        var button = $gf(this);
        var font_name = $gf(this).attr('data-font_name');
        $gf('body').append('<div class="google-font-overlay"></div>');
        $gf('body').append('<div class="google-font-confirmation"><div class="google-font-confirmation-header"><h3>Are you sure you want to remove this font?</h3></div><div class="google-font-message"><input type="button" id="" data-gfont_name="' + font_name + '" class="google-font-message-buttons google-font-message-delete gfont-buttons" value="Yes"/><input type="button" id="" class="google-font-message-buttons google-font-message-no-delete gfont-buttons" value="No"/></div><a href="javacript:void(0)" class="gfont-anchor-buttons gfont-buttons google-font-message-no-delete"><i class="icon-trash"></i></a></div>');
        $gf('.google-font-overlay').fadeIn(100);
        $gf('.google-font-confirmation').fadeIn(100);
    });
    $gf('body').on('click', '.gfont-buttons', function() {
        if ($gf(this).hasClass('google-font-message-delete')) {
            var font_name = $gf(this).attr('data-gfont_name');
            var data = {
                action: 'delete_google_font',
                font_name: font_name
            };
            $gf.post(ajaxurl, data, function(response) {
                $gf('.font-delete').each(function(i, e) {
                    var button = $gf(this);
                    var bfont_name = $gf(this).attr('data-font_name');
                    if (bfont_name == font_name)
                        button.parent().remove();
                });
            });
        }
        $gf('.google-font-confirmation').fadeOut(200);
        $gf('.google-font-overlay').fadeOut(200);
    });
    $gf('body').on('click', '.update-google-font-button', function() {
        var font_name = $gf(this).attr('data-font_name');
        var parent = $gf(this).parent();
        var variant_array = new Array();
        var subset_array = new Array();
        $gf(parent).find('.font-variant').each(function(index, variant_wrap) {
            var temp_array = {};
            var variant_checkbox = $gf(variant_wrap).find('.selected-variant-checkbox');
            temp_array['variant_value'] = $gf(variant_checkbox).val();
            if ($gf(variant_checkbox).is(':checked'))
                temp_array['variant_selected'] = true;
            else
                temp_array['variant_selected'] = false;
            variant_array.push(temp_array);
        });
        $gf(parent).find('.font-subset').each(function(index, subset_wrap) {
            var temp_array = {};
            var subset_checkbox = $gf(subset_wrap).find('.selected-subset-checkbox');
            temp_array['subset_value'] = $gf(subset_checkbox).val();
            if ($gf(subset_checkbox).is(':checked'))
                temp_array['subset_selected'] = true;
            else
                temp_array['subset_selected'] = false;
            subset_array.push(temp_array);
        });
        var data = {
            action: 'update_google_font',
            font_name: font_name,
            variants: variant_array,
            subsets: subset_array
        };
        $gf(this).next('.fspinner').addClass('fspinner-show');
        $gf.post(ajaxurl, data, function(response) {
            $gf('.fspinner').removeClass('fspinner-show');
        });
    });
    $gf('body').on('click', '.selected-font-top', function() {
        if ($gf(this).hasClass('fopened')) {
            $gf(this).parent().find('.selected-font-content').slideUp(200);
            $gf(this).removeClass('fopened');
            return;
        }
        $gf('.selected-font .selected-font-content').slideUp(200);
        $gf('.selected-font-top').removeClass('fopened');
        $gf(this).addClass('fopened');
        $gf(this).parent().find('.selected-font-content').slideToggle(200);
    });
    //get google fonts
    get_google_fonts();
});

function get_google_fonts() {

    $gf('#load-more').show();


    $list_wrapper = $gf('#fonts-list-wrapper');
    var gstart = $list_wrapper.attr('data-gstart');
    var gfetch = $list_wrapper.attr('data-gfetch');
    var gsearch = $gf('#search_gfont').val();
    var data = {
        action: 'get_google_fonts',
        start: gstart,
        fetch: gfetch,
        search: gsearch
    };
    $gf.post(ajaxurl, data, function(response) {
        var object = jQuery.parseJSON(response);
        var font_count = object.fonts_count;
        var fonts = object.fonts;
        var is_search = object.is_search;
        if (font_count == 0 && is_search == 'false') {
            var ghtml = '<div class="gfont">It seems you don\'t have any Google Fonts yet. But you can download them now with <a href="javascript:void(0)" id="refresh-google-fonts">just a click.</a> <span class="spinner"><i class="icon-refresh icon-spin icon-fw"></i></span></div>';
            $list_wrapper.html(ghtml);
        } else {
            if (fonts.length == 0) {
                var ghtml = '<div class="gfont">';
                ghtml += 'Bummer, there are no font families that match. Try with other search keyword';
                ghtml += '</div>';
                $list_wrapper.html(ghtml);
            } else {
                var ghtml = convert_json_to_html(fonts);
                $list_wrapper.append(ghtml);
            }
        }
        $gf('#load-more').hide();
        $list_wrapper.attr('data-gstart', parseInt(gstart) + parseInt(gfetch));
    });
}

function convert_json_to_html(object) {
    var html = '';
    $gf.each(object, function(index, gfont) {
        var font_call = gfont.font_call;
        var font_name = gfont.font_name;
        var font_variants = gfont.variants;
        var font_subsets = gfont.subsets;
        var selected = gfont.selected;
        if (temp = font_name.split(' ')) {
            var ctemp = temp.length;
            var temp_id = '';
            $gf.each(temp, function(i, val) {
                temp_id += val;
                if ((ctemp - 1) != i)
                    temp_id += '-';
            })
        } else
            var temp_id = font_name;

        var variants_length = font_variants.length;
        var subsets_length = font_subsets.length;

        if (selected == 'true') {
            var button_text = 'Added in collection';
            var button_class = 'font-added';
        } else {
            var button_text = 'Add to Collection';
            var button_class = '';
        }
        html += '<div class="gfont">';
        html += '<div class="font-header" style="font-family:\'' + font_name + '\'">' + font_name + '</div>';
        html += '<input type="button" class="add-google-font alignright ' + button_class + '" data-font_family="' + font_call + '" data-font_name="' + font_name + '" value="' + button_text + '"/><span class="spinner"><i class="icon-refresh icon-spin icon-fw"></i></span><div class="clear"></div>';
        if (variants_length > 1) {
            font_call += ':';
            html += '<span class="variants">';
            $gf.each(font_variants, function(vindex, variant) {
                if (variant != 'regular') {
                    var font_style = 'font-family:\'' + font_name + '\';';
                    if (/italic/i.test(variant)) {
                        font_style += 'font-style:italic;';
                    }
                    var weight = 'normal';
                    if (weight = variant.match(/\d+/)) {
                        font_style += 'font-weight:' + weight + ';';
                    }
                    html += '<span class="font-variant">';
                    html += '<input type="checkbox" class="font-variant-inputs" value="' + variant + '" id="' + temp_id + '-' + variant + '-' + vindex + '"/>';
                    html += '<label for="' + temp_id + '-' + variant + '-' + vindex + '" style="' + font_style + '">' + variant + '</label>';
                    html += '</span>';
                    font_call += variant;
                    if (variants_length > 0 && (variants_length - 1) != vindex) {
                        font_call += ',';
                    }
                }
            });
            html += '</span>';
        } //end of varients
        if (subsets_length > 1) {
            html += '<span class="subsets">';
            $gf.each(font_subsets, function(sindex, subset) {
                html += '<span class="font-subset">';
                html += '<input type="checkbox" class="font-subset-inputs" value="' + subset + '" id="' + temp_id + '-' + subset + '-' + sindex + '"/>';
                html += '</span>';
            });
            html += '</span>';
        } //end of subsets
        html += '<div class="clear"></div>';
        html += '</div>';
        $gf('head').append('<link href="https://fonts.googleapis.com/css?family=' + font_call + '" type="text/css" media="all" rel="stylesheet"/>');
    });
    return html;
}
$gf(window).scroll(function() {

    if ($gf(window).height() + $gf(window).scrollTop() == $gf(document).height()) {

        var gsearch = $gf('#search_gfont').val();
        if (gsearch == '')
            get_google_fonts();
    }
});
$gf(document).ready(function() {
    var typingTimer; //timer identifier
    var doneTypingInterval = 500; //time in ms, 2 second for example
    //on keyup, start the countdown
    $gf('#search_gfont').keyup(function() {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(search_gfont, doneTypingInterval);
    });
    //on keydown, clear the countdown 
    $gf('#search_gfont').keydown(function() {
        clearTimeout(typingTimer);
    });
});

function search_gfont() {
    var gsearch = $gf('#search_gfont').val();
    $list_wrapper = $gf('#fonts-list-wrapper');
    $list_wrapper.html('');
    if (gsearch == '') {
        $list_wrapper.attr('data-gstart', parseInt(0));
    }
    get_google_fonts();
}
$gf(document).ready(function() {
    //set_wrap_height('notfixed');
    var $menu = jQuery(".fonts-selected-list"),
        $window = jQuery(window),
        offset = $menu.offset(),
        topPadding = 15;
    $window.scroll(function() {
        if ($window.scrollTop() + 35 + 15 > offset.top) {
            $menu.addClass('uagffixed');
            //set_wrap_height('fixed');
        } else {
            $menu.removeClass('uagffixed');
            //set_wrap_height('notfixed');
        }
    });
});

function set_wrap_height(fx) {
    var win_height = $gf(window).height();
    if (fx == 'notfixed') {
        var swrap_top = $gf('#fonts-selected-wrapper').offset().top;
        var cheight = win_height - swrap_top - 40;
    } else {
        var cheight = win_height - 140;
    }
    $gf('#fonts-selected-wrapper').height(cheight);
}