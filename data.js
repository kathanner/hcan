$(document).ready(function(){
  $.getJSON("https://raw.githubusercontent.com/kathanner/hcan/main/data_demHawaii.json", function(data){
    var demographicsHawaii_data = '';
    $.each(data, function(key, value){
      demographicsHawaii_data += '<div class="item">';
      demographicsHawaii_data += '<h4>'+value.demographicsHawaii.Indicator+'</h4>';
      demographicsHawaii_data += '<p class="latestValue"><span class="icon">'+value.demographicsHawaii.StatIncrease+'</span>&nbsp;'+value.demographicsHawaii.StatNow+'</p>';
      demographicsHawaii_data += '<p class="latestTimeFrame">'+value.demographicsHawaii.TimeFrame+'</p>';
      demographicsHawaii_data += '<p class="previous">Trending <span class="trend">'+value.demographicsHawaii.StatIncrease+'</span>, '+value.demographicsHawaii.StatPrevious+' in '+value.demographicsHawaii.TimeFramePrevious+'</p>';
      demographicsHawaii_data += '</div>';
    });
    $('#demographics.hawaii').append(demographicsHawaii_data);
    var down = $( ".icon:contains('false')" )
    var up = $( ".icon:contains('true')" )
    var trendUp = $( ".trend:contains('true')" )
    var trendDown = $( ".trend:contains('false')" )
    $( "<i class='far fa-arrow-alt-circle-down'></i>" ).replaceAll( down );
    $("<span class='trend'>down</span>").replaceAll( trendDown );
    $( "<i class='far fa-arrow-alt-circle-up'></i>" ).replaceAll( up );
    $("<span class='trend'>up</span>").replaceAll( trendUp );
  });
});