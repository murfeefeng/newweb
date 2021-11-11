//Scroll top open header --------------
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.headerMain.hdBig').fadeIn(200).removeClass('hdBig').addClass('hdSmall');
        } else {
            $('.headerMain').removeClass('hdSmall').addClass('hdBig');
        }
    });
});

//for M --------------
if ($(window).width() < 768) {
    $(function() {
        $(window).scroll(function() {
            // if () {
            //     $('.pdOthers').addClass('pdOther_fixed');
            // }
            if ($(this).scrollTop() > 1500 || $('.white-popup-block').hasClass('pdinfo_show_m')) {
                $('.pdOthers').addClass('pdOther_fixed');
            } else {
                $('.pdOthers').removeClass('pdOther_fixed');
            }
        });
    });
    $('.nav_m').click(function(event) {
        $(this).siblings('ul').fadeIn(200);
        event.stopPropagation();
    });
    $(document).click(function() {
        $(".navMember ul").hide();
    });

}

// footer open Menu--------------
$(function() {
    $(".menuLv2").hide();
    $(".menuLv1_link").click(function() {
        $(".menuLv2").hide();
        $(".menuLv1").find("i").html(" + ");
        $(this).siblings(".menuLv2").slideToggle(300);
        $(this).children("i").html(" - ");
        return false;
    });
});

//FAQ list title arrow--------------
$(function() {
    $(".listHead").click(function() {
        if ($(this).find(".icon_arrow").hasClass('arrow_downR')) {
            $(this).siblings().toggle(300);
            $(this).find(".icon_arrow").removeClass('arrow_downR');
        } else {
            $(this).siblings().toggle(300);
            $(this).find(".icon_arrow").addClass('arrow_downR');

        }
    });
});



//SEARCH--------------
$('.nav_search').click(function() {
    $('.search_bg').show().addClass('show');
    return false;
});
$(document).click(function() {
    $(".search_bar > input").val("");
    $('.search_bg').hide();
});

//filter
$('.filter_in').hide();
$('.toolsfilter span').click(function() {
    $(this).siblings('.filter_in').fadeIn(300);
    event.stopPropagation();
});
$('.filter_submit').click(function() {
    $('.filter_in').hide();
    event.stopPropagation();
    return false;
});

$('.filter_in .btnClose').click(function() {
    $('.filter_in').hide();
    event.stopPropagation();
});


//MENU (for phone)--------------
$('.navMenuList').click(function() {
    $('.navMain_m').fadeIn(300).addClass('slideLeft');

    return false;
});
$('.btnClose').click(function() {
    $('.navMain_m').fadeOut(100).removeClass('slideLeft');

    return false;
});

//product Page
$('.icon_wishlist').click(function() {
    if ($(this).hasClass("add_wishlist")) {
        $(this).removeClass('add_wishlist');
    } else {
        $(this).addClass('add_wishlist');
    }
});

$('.pd_color li').click(function() {
    var str = $(this).find("img").attr("alt");
    $(this).addClass('select');
    $(this).siblings().removeClass('select');
    $(this).parent("ul").siblings(".color-name").html(str);
});

$('#pdSIZE li').click(function() {
    var sizeBTN = $(this).children(".size_name");
    if (sizeBTN.hasClass("pd_soldout")) {
        $(this).removeClass('select');

    } else {
        $(this).addClass('select');
        $(this).siblings().removeClass('select');
    }
    $(".qty_mask").hide();

});
if ($(window).width() < 767) {
    $('#pdSIZE li').click(function() {
        $("#pdSIZE").css("margin-bottom", "42vw");
        event.stopPropagation();
    });
    $(document).click(function() {
        $("#pdSIZE").css("margin-bottom", "0");
    });
}
//Scroll gotop 這個要寫在最後面 --------------

$(function() {
    $('.goTop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 'easeOutBack');
        return false;
    });
    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('#goTopMenu').fadeIn();
        } else {
            $('#goTopMenu').hide();
        }
    });
});

//城市
var var_city = '["臺北市","基隆市","新北市","連江縣","宜蘭縣","釣魚臺","新竹市","新竹縣","桃園市","苗栗縣","臺中市","彰化縣","南投縣","嘉義市","嘉義縣","雲林縣","臺南市","高雄市","南海島","澎湖縣","金門縣","屏東縣","臺東縣","花蓮縣"]';

//地區
var var_zone = '{"南投縣":{"540":"南投市","551":"名間鄉","541":"中寮鄉","552":"集集鎮","542":"草屯鎮","553":"水里鄉","544":"國姓鄉","555":"魚池鄉","545":"埔里鎮","556":"信義鄉","546":"仁愛鄉","557":"竹山鎮","558":"鹿谷鄉"},"桃園市":{"330":"桃園區","320":"中壢區","333":"龜山區","334":"八德區","324":"平鎮區","335":"大溪區","325":"龍潭區","336":"復興區","326":"楊梅區","337":"大園區","327":"新屋區","338":"蘆竹區","328":"觀音區"},"高雄市":{"851":"茂林區","830":"鳳山區","852":"茄萣區","831":"大寮區","832":"林園區","811":"楠梓區","833":"鳥松區","812":"小港區","813":"左營區","814":"仁武區","815":"大社區","817":"東沙群島","819":"南沙群島","840":"大樹區","820":"岡山區","842":"旗山區","821":"路竹區","843":"美濃區","800":"新興區","822":"阿蓮區","844":"六龜區","801":"前金區","823":"田寮區","845":"內門區","802":"苓雅區","824":"燕巢區","846":"杉林區","803":"鹽埕區","825":"橋頭區","847":"甲仙區","804":"鼓山區","826":"梓官區","848":"桃源區","805":"旗津區","827":"彌陀區","849":"那瑪夏區","806":"前鎮區","828":"永安區","807":"三民區","829":"湖內區"},"金門縣":{"891":"金湖鎮","892":"金寧鄉","893":"金城鎮","894":"烈嶼鄉","896":"烏坵鄉","890":"金沙鎮"},"屏東縣":{"907":"鹽埔鄉","929":"琉球鄉","908":"長治鄉","909":"麟洛鄉","931":"佳冬鄉","932":"新園鄉","911":"竹田鄉","912":"內埔鄉","913":"萬丹鄉","940":"枋寮鄉","941":"枋山鄉","920":"潮州鎮","942":"春日鄉","921":"泰武鄉","943":"獅子鄉","900":"屏東市","922":"來義鄉","944":"車城鄉","901":"三地門鄉","923":"萬巒鄉","945":"牡丹鄉","902":"霧臺鄉","924":"崁頂鄉","946":"恆春鎮","903":"瑪家鄉","925":"新埤鄉","947":"滿州鄉","904":"九如鄉","926":"南州鄉","905":"里港鄉","927":"林邊鄉","906":"高樹鄉","928":"東港鎮"},"基隆市":{"200":"仁愛區","201":"信義區","202":"中正區","203":"中山區","204":"安樂區","205":"暖暖區","206":"七堵區"},"澎湖縣":{"880":"馬公市","881":"西嶼鄉","882":"望安鄉","883":"七美鄉","884":"白沙鄉","885":"湖西鄉"},"連江縣":{"210":"北竿鄉","211":"莒光鄉","212":"東引鄉","209":"南竿鄉"},"彰化縣":{"530":"二水鄉","510":"員林市","511":"社頭鄉","512":"永靖鄉","513":"埔心鄉","514":"溪湖鎮","515":"大村鄉","516":"埔鹽鄉","520":"田中鎮","521":"北斗鎮","500":"彰化市","522":"田尾鄉","523":"埤頭鄉","502":"芬園鄉","524":"溪州鄉","503":"花壇鄉","525":"竹塘鄉","504":"秀水鄉","526":"二林鎮","505":"鹿港鎮","527":"大城鄉","506":"福興鄉","528":"芳苑鄉","507":"線西鄉","508":"和美鎮","509":"伸港鄉"},"嘉義市":{"600":"東區"},"南海島":{"819":"南沙群島","817":"東沙群島"},"嘉義縣":{"621":"民雄鄉","611":"鹿草鄉","622":"大林鎮","612":"太保市","623":"溪口鄉","602":"番路鄉","613":"朴子市","624":"義竹鄉","603":"梅山鄉","614":"東石鄉","625":"布袋鎮","604":"竹崎鄉","615":"六腳鄉","605":"阿里山鄉","616":"新港鄉","606":"中埔鄉","607":"大埔鄉","608":"水上鄉"},"新北市":{"251":"淡水區","252":"三芝區","231":"新店區","253":"石門區","232":"坪林區","233":"烏來區","234":"永和區","235":"中和區","236":"土城區","237":"三峽區","238":"樹林區","239":"鶯歌區","241":"三重區","220":"板橋區","242":"新莊區","221":"汐止區","243":"泰山區","222":"深坑區","244":"林口區","223":"石碇區","224":"瑞芳區","247":"蘆洲區","226":"平溪區","248":"五股區","227":"雙溪區","249":"八里區","228":"貢寮區","207":"萬里區","208":"金山區"},"釣魚臺":{"290":"釣魚臺"},"新竹市":{"300":"北區"},"臺北市":{"110":"信義區","100":"中正區","111":"士林區","112":"北投區","103":"大同區","114":"內湖區","104":"中山區","115":"南港區","105":"松山區","116":"文山區","106":"大安區","108":"萬華區"},"新竹縣":{"310":"竹東鎮","300":"寶山鄉","311":"五峰鄉","312":"橫山鄉","302":"竹北市","313":"尖石鄉","303":"湖口鄉","314":"北埔鄉","304":"新豐鄉","315":"峨眉鄉","305":"新埔鎮","306":"關西鎮","307":"芎林鄉","308":"寶山鄉"},"臺南市":{"709":"安南區","730":"新營區","731":"後壁區","710":"永康區","732":"白河區","711":"歸仁區","733":"東山區","712":"新化區","734":"六甲區","713":"左鎮區","735":"下營區","714":"玉井區","736":"柳營區","715":"楠西區","737":"鹽水區","716":"南化區","717":"仁德區","718":"關廟區","719":"龍崎區","741":"新市區","720":"官田區","742":"大內區","721":"麻豆區","743":"山上區","700":"中西區","722":"佳里區","744":"新市區","701":"東區","723":"西港區","745":"安定區","702":"南區","724":"七股區","725":"將軍區","704":"北區","726":"學甲區","727":"北門區","708":"安平區"},"臺東縣":{"950":"臺東市","961":"成功鎮","951":"綠島鄉","962":"長濱鄉","952":"蘭嶼鄉","963":"太麻里鄉","953":"延平鄉","964":"金峰鄉","954":"卑南鄉","965":"大武鄉","955":"鹿野鄉","966":"達仁鄉","956":"關山鎮","957":"海端鄉","958":"池上鄉","959":"東河鄉"},"宜蘭縣":{"290":"釣魚臺","270":"蘇澳鎮","260":"宜蘭市","261":"頭城鎮","272":"南澳鄉","262":"礁溪鄉","263":"壯圍鄉","264":"員山鄉","265":"羅東鎮","266":"三星鄉","267":"大同鄉","268":"五結鄉","269":"冬山鄉"},"苗栗縣":{"360":"苗栗市","350":"竹南鎮","361":"造橋鄉","351":"頭份市","362":"頭屋鄉","352":"三灣鄉","363":"公館鄉","353":"南庄鄉","364":"大湖鄉","354":"獅潭鄉","365":"泰安鄉","366":"銅鑼鄉","356":"後龍鎮","367":"三義鄉","357":"通霄鎮","368":"西湖鄉","358":"苑裡鎮","369":"卓蘭鎮"},"雲林縣":{"640":"斗六市","651":"北港鎮","630":"斗南鎮","652":"水林鄉","631":"大埤鄉","653":"口湖鄉","632":"虎尾鎮","643":"林內鄉","654":"四湖鄉","633":"土庫鎮","655":"元長鄉","634":"褒忠鄉","635":"東勢鄉","646":"古坑鄉","636":"臺西鄉","647":"莿桐鄉","637":"崙背鄉","648":"西螺鎮","638":"麥寮鄉","649":"二崙鄉"},"花蓮縣":{"970":"花蓮市","981":"玉里鎮","971":"新城鄉","982":"卓溪鄉","972":"秀林鄉","983":"富里鄉","973":"吉安鄉","974":"壽豐鄉","975":"鳳林鎮","976":"光復鄉","977":"豐濱鄉","978":"瑞穗鄉","979":"萬榮鄉"},"臺中市":{"432":"大肚區","411":"太平區","433":"沙鹿區","412":"大里區","434":"龍井區","413":"霧峰區","435":"梧棲區","414":"烏日區","436":"清水區","437":"大甲區","438":"外埔區","439":"大安區","420":"豐原區","421":"后里區","400":"中區","422":"石岡區","401":"東區","423":"東勢區","402":"南區","424":"和平區","403":"西區","404":"北區","426":"新社區","427":"潭子區","406":"北屯區","428":"大雅區","407":"西屯區","429":"神岡區","408":"南屯區"}}';

//訂購人地址
var array_city = JSON.parse(var_city);
var optionHtml_city = "";
for (var i = 0; i < array_city.length; i++) {
    optionHtml_city += '<option value=' + array_city[i] + '>' + array_city[i] + '</option>';
}
$('#selCity').append(optionHtml_city);
$('#selCity1').append(optionHtml_city);

$('#selCity').change(function() {
    var selzone = JSON.parse(var_zone);
    var job_CityZone = selzone[$('#selCity').val()];
    var optionHtml = "";
    for (var key in job_CityZone) {
        // var value = key + '-' + job_CityZone[key];
        var value = job_CityZone[key];
        // var postCode = key;
        // optionHtml += '<option>' + key + '-' + value + '</option>';
        optionHtml += '<option value="' + key + '">' + value + '</option>';
    }
    $('#selZone').html(optionHtml);
    var selCode = $('#selZone option:first-child').val();
    $('#fillCode').attr("value", selCode);
});
$('#selZone').change(function() {
    var zipcode = $(this).val();
    $('#fillCode').attr("value", zipcode);
});
$('#selCity1').change(function() {
    var selzone = JSON.parse(var_zone);
    var job_CityZone = selzone[$('#selCity1').val()];
    var optionHtml = "";
    for (var key in job_CityZone) {
        // var value = key + '-' + job_CityZone[key];
        var value = job_CityZone[key];
        // var postCode = key;
        // optionHtml += '<option>' + key + '-' + value + '</option>';
        optionHtml += '<option value="' + key + '">' + value + '</option>';


    }
    $('#selZone1').html(optionHtml);
    var selCode1 = $('#selZone1 option:first-child').val();
    $('#fillCode1').attr("value", selCode1);
});

$('#selZone1').change(function() {
    var zipcode1 = $(this).val();
    $('#fillCode1').attr("value", zipcode1);
});



$(function() {
    $(".user").select({
        language: 'zh-TW',
        width: '100%',
        // 最多字元限制
        maximumInputLength: 10,
        // 最少字元才觸發尋找, 0 不指定
        minimumInputLength: 0,
        // 當找不到可以使用輸入的文字
        tags: false,
    });
})