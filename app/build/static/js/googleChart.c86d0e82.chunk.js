webpackJsonp([124],{2914:function(t,o,e){var r=e(0),n=["#3366CC","#DC3912","#FF9900","#109618","#990099","#3B3EAC","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#329262","#5574A6","#3B3EAC"],a=Object.freeze({DEFAULT_CHART_COLORS:n,default:n}),i=function(t){if(void 0===t&&(t=window),void 0===t)return{};if(void 0===t.google)throw new Error("google not in window object. Error in get-google-charts.");return t.google},s=new function(){var t=this;this.isLoaded=!1,this.isLoading=!1,this.loadScript=null,this.destroy=function(){t.isLoading=!1,t.isLoaded=!1,t.loadScript=null},this.init=function(o,r,n,a){if((t.isLoading||t.isLoaded)&&null!==t.loadScript)return t.loadScript;t.isLoading=!0;var i="undefined"!=typeof window?e(3144):function(t,o){return(0,o.success)()};return t.loadScript=new Promise(function(e){i("https://www.gstatic.com/charts/loader.js",{success:function(){var i=function(t){if(void 0===t&&(t=window),void 0===t)return{};if(void 0===t.google)throw new Error("google not in window object. Error in get-google-charts.");return t.google.charts}(window);i.load(r||"current",{packages:o||["corechart"],language:n||"en",mapsApiKey:a}),i.setOnLoadCallback(function(){t.isLoaded=!0,t.isLoading=!1,e()})}})}),t.isLoading=!0,t.loadScript}},l=0,p=function(){return"reactgooglegraph-"+(l+=1)},u=function(t){function o(o){var e=this;t.call(this,o),this.chart=null,this.wrapper=null,this.hidden_columns={},this.dataTable=[],this.isUnmounted=!1,this.onResize=function(){e.drawChart()},this.onSelectToggle=function(){if(null!==e.chart&&e.props.legend_toggle){var t=e.chart.getSelection();t.length>0&&null==t[0].row&&e.togglePoints(t[0].column)}},this.getColumnColor=function(t){if(e.props.options&&e.props.options.colors){if(e.props.options.colors[t])return e.props.options.colors[t]}else if(t in a)return a[t];return a[0]},this.applyNumberFormat=function(t,o){new(i(window).visualization.NumberFormat)(o).format(e.dataTable,t)},this.applyDateFormat=function(t,o){new(i(window).visualization.DateFormat)(o).format(e.dataTable,t)},this.buildDataTableFromProps=function(){var t=e.props.chartType,o=i(window);if(e.props.diffdata&&null!==e.props.chartType){var r=e.props.diffdata,n=o.visualization.arrayToDataTable(r.old),a=o.visualization.arrayToDataTable(r.new);return(0,o.visualization[t].prototype.computeDiff)(n,a)}if(null===e.props.data&&e.props.rows&&0===e.props.rows.length&&0==!e.props.allowEmptyRows)throw new Error("Can't build DataTable from rows and columns: rows array in props is empty");if(null===e.props.data&&e.props.columns&&0===e.props.columns.length)throw new Error("Can't build DataTable from rows and columns: columns array in props is empty");if(null!==e.props.data)try{return e.wrapper.setDataTable(e.props.data),e.wrapper.getDataTable()}catch(t){throw new Error("Failed to set DataTable from data props ! ",t)}var s=new window.google.visualization.DataTable;if(e.props.columns.forEach(function(t){s.addColumn(t)}),s.addRows(e.props.rows),e.props.numberFormat){var l=e.props.numberFormat;e.applyNumberFormat(l.column,l.options)}if(e.props.dateFormat){var p=e.props.dateFormat,u=p.options;p.columns.forEach(function(t){e.applyDateFormat(t,u)})}return e.props.formatters.forEach(function(t){var o=t.type,r=t.column,n=t.options;switch(o){case"NumberFormat":e.applyNumberFormat(r,n);break;case"DateFormat":e.applyDateFormat(r,n);break;default:console.log("Unkown formatter type: "+o)}}),s},this.updateDataTable=function(){return window.google.visualization.errors.removeAll(document.getElementById(e.wrapper.getContainerId())),e.dataTable.removeRows(0,e.dataTable.getNumberOfRows()),e.dataTable.removeColumns(0,e.dataTable.getNumberOfColumns()),e.dataTable=e.buildDataTableFromProps(),e.dataTable},this.drawChart=function(){if(!e.isUnmounted){if(e.wrapper){if(e.updateDataTable(),e.wrapper.setDataTable(e.dataTable),e.wrapper.setOptions(e.props.options),e.wrapper.getChartType()!==e.props.chartType){window.google.visualization.events.removeAllListeners(e.wrapper),e.wrapper.setChartType(e.props.chartType);var t=e;window.google.visualization.events.addOneTimeListener(e.wrapper,"ready",function(){t.chart=t.wrapper.getChart(),t.listenToChartEvents.call(t)})}}else e.wrapper=new window.google.visualization.ChartWrapper({chartType:e.props.chartType,options:e.props.options,containerId:e.state.graphID}),e.dataTable=e.buildDataTableFromProps(),e.wrapper.setDataTable(e.dataTable),window.google.visualization.events.addOneTimeListener(e.wrapper,"ready",function(){e.chart=e.wrapper.getChart(),e.listenToChartEvents(),e.addChartActions()});e.wrapper.draw()}},this.addChartActions=function(){null!==e.props.chartActions&&e.props.chartActions.forEach(function(t){e.chart.setAction({id:t.id,text:t.text,action:t.action.bind(e,e.chart)})})},this.listenToChartEvents=function(){e.props.legend_toggle&&window.google.visualization.events.addListener(e.wrapper,"select",e.onSelectToggle),e.props.chartEvents.forEach(function(t){var o;"ready"===t.eventName?t.callback(e):(o=t,window.google.visualization.events.addListener(e.chart,o.eventName,function(t){o.callback(e,t)}))})},this.buildColumnFromSourceData=function(t){return{label:e.dataTable.getColumnLabel(t),type:e.dataTable.getColumnType(t),sourceColumn:t,role:e.dataTable.getColumnRole(t)}},this.buildEmptyColumnFromSourceData=function(t){return{label:e.dataTable.getColumnLabel(t),type:e.dataTable.getColumnType(t),calc:function(){return null},role:e.dataTable.getColumnRole(t)}},this.addEmptyColumnTo=function(t,o){var r=e.buildEmptyColumnFromSourceData(o);t.push(r)},this.hideColumn=function(t,o){e.isHidden(o)||(e.hidden_columns[o]={color:e.getColumnColor(o-1)}),t.push("#CCCCCC")},this.addSourceColumnTo=function(t,o){var r=e.buildColumnFromSourceData(o);t.push(r)},this.isHidden=function(t){return void 0!==e.hidden_columns[t]},this.restoreColorTo=function(t,o){var r;e.isHidden(o)?(r=e.hidden_columns[o].color,delete e.hidden_columns[o]):r=e.getColumnColor(o-1),0!==o&&t.push(r)},this.debounce=function(t,o){var e;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];var a=this;clearTimeout(e),e=setTimeout(function(){return t.apply(a,r)},o)}},this.togglePoints=function(t){for(var o=new window.google.visualization.DataView(e.wrapper.getDataTable()),r=o.getNumberOfColumns(),n=[],a=[],i=0;i<r;i+=1)0===i?e.addSourceColumnTo(a,i):i===t?e.isHidden(i)?(e.addSourceColumnTo(a,i),e.restoreColorTo(n,i)):(e.addEmptyColumnTo(a,i),e.hideColumn(n,i)):e.isHidden(i)?(e.addEmptyColumnTo(a,i),e.hideColumn(n,i)):(e.addSourceColumnTo(a,i),e.restoreColorTo(n,i));o.setColumns(a),e.props.options.colors=n,e.chart.draw(o,e.props.options)},this.state={graphID:o.graph_id||p()}}return t&&(o.__proto__=t),(o.prototype=Object.create(t&&t.prototype)).constructor=o,o.prototype.componentDidMount=function(){var t=this;"undefined"!=typeof window&&(this.props.loadCharts?s.init(this.props.chartPackages,this.props.chartVersion,this.props.chartLanguage,this.props.mapsApiKey).then(function(){t.drawChart(),t.onResize=t.debounce(t.onResize,200),window.addEventListener("resize",t.onResize)}):this.drawChart())},o.prototype.componentDidUpdate=function(){var t=this;this.props.loadCharts?s.isLoading?s.loadScript&&s.loadScript.then(function(){t.drawChart()}):s.isLoaded&&this.drawChart():this.drawChart()},o.prototype.componentWillUnmount=function(){this.isUnmounted=!0,s.destroy();try{window&&(window.google&&window.google.visualization&&window.google.visualization.events.removeAllListeners(this.wrapper),window.removeEventListener("resize",this.onResize))}catch(t){return}},o.prototype.render=function(){return r.createElement("div",{id:this.state.graphID,style:{height:this.props.height||this.props.options.height,width:this.props.width||this.props.options.width}},this.props.loader?this.props.loader:"Rendering Chart...")},o}(r.Component);u.defaultProps={chartType:"LineChart",rows:[],columns:[],options:{chart:{title:"Chart Title",subtitle:"Subtitle"},hAxis:{title:"X Label"},vAxis:{title:"Y Label"},width:"100%",height:"100%"},width:"400px",height:"300px",chartEvents:[],chartActions:null,data:null,legend_toggle:!1,allowEmptyRows:!1,loadCharts:!0,loader:r.createElement("div",null,"Rendering Chart"),chartPackages:["corechart"],chartVersion:"current",chartLanguage:"en",numberFormat:null,dateFormat:null,formatters:[],diffdata:null},t.exports={Chart:u}},3144:function(t,o,e){var r,n,a;!function(e,i){n=[],r=i,void 0!==(a="function"===typeof r?r.apply(o,n):r)&&(t.exports=a)}(0,function(){function t(t,o){t=t.push?t:[t];var e,r,n,a,i=[],s=t.length,u=s;for(e=function(t,e){e.length&&i.push(t),--u||o(i)};s--;)r=t[s],n=l[r],n?e(r,n):(a=p[r]=p[r]||[],a.push(e))}function o(t,o){if(t){var e=p[t];if(l[t]=o,e)for(;e.length;)e[0](t,o),e.splice(0,1)}}function e(t,o){t.call&&(t={success:t}),o.length?(t.error||i)(o):(t.success||i)(t)}function r(t,o,e,n){var a,s,l=document,p=e.async,u=(e.numRetries||0)+1,d=e.before||i,c=t.replace(/^(css|img)!/,"");n=n||0,/(^css!|\.css$)/.test(t)?(a=!0,s=l.createElement("link"),s.rel="stylesheet",s.href=c):/(^img!|\.(png|gif|jpg|svg)$)/.test(t)?(s=l.createElement("img"),s.src=c):(s=l.createElement("script"),s.src=t,s.async=void 0===p||p),s.onload=s.onerror=s.onbeforeload=function(i){var l=i.type[0];if(a&&"hideFocus"in s)try{s.sheet.cssText.length||(l="e")}catch(t){l="e"}if("e"==l&&(n+=1)<u)return r(t,o,e,n);o(t,l,i.defaultPrevented)},!1!==d(t,s)&&l.head.appendChild(s)}function n(t,o,e){t=t.push?t:[t];var n,a,i=t.length,s=i,l=[];for(n=function(t,e,r){if("e"==e&&l.push(t),"b"==e){if(!r)return;l.push(t)}--i||o(l)},a=0;a<s;a++)r(t[a],n,e)}function a(t,r,a){var i,l;if(r&&r.trim&&(i=r),l=(i?a:r)||{},i){if(i in s)throw"LoadJS";s[i]=!0}n(t,function(t){e(l,t),o(i,t)},l)}var i=function(){},s={},l={},p={};return a.ready=function(o,r){return t(o,function(t){e(r,t)}),a},a.done=function(t){o(t,[])},a.reset=function(){s={},l={},p={}},a.isDefined=function(t){return t in s},a})}});