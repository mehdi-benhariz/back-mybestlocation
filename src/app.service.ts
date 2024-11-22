import { PrismaService } from './prisma.service';
import { Inject, Injectable } from '@nestjs/common';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class AppService {
  data = [
    { username: 'mehdi1' },
    { username: 'mehdi2' },
    { username: 'mehdi3' },
    { username: 'mehdi4' },
    { username: 'mehdi5' },
    { username: 'mehdi6' },
    { username: 'mehdi7' },
    { username: 'mehdi8' },
    { username: 'mehdi9' },
    { username: 'mehdi10' },
    { username: 'mehdi11' },
    { username: 'mehdi12' },
    { username: 'mehdi13' },
    { username: 'mehdi14' },
    { username: 'mehdi15' },
    { username: 'mehdi16' },
    { username: 'mehdi17' },
    { username: 'mehdi18' },
    { username: 'mehdi19' },
    { username: 'mehdi20' },
    { username: 'mehdi21' },
    { username: 'mehdi22' },
    { username: 'mehdi23' },
    { username: 'mehdi24' },
    { username: 'mehdi25' },
    { username: 'mehdi26' },
    { username: 'mehdi27' },
    { username: 'mehdi28' },
    { username: 'mehdi29' },
    { username: 'mehdi30' },
    { username: 'mehdi31' },
    { username: 'mehdi32' },
    { username: 'mehdi33' },
    { username: 'mehdi34' },
    { username: 'mehdi35' },
    { username: 'mehdi36' },
    { username: 'mehdi37' },
    { username: 'mehdi38' },
    { username: 'mehdi39' },
    { username: 'mehdi40' },
    { username: 'mehdi41' },
    { username: 'mehdi42' },
    { username: 'mehdi43' },
    { username: 'mehdi44' },
    { username: 'mehdi45' },
    { username: 'mehdi46' },
    { username: 'mehdi47' },
    { username: 'mehdi48' },
    { username: 'mehdi49' },
    { username: 'mehdi50' },
    { username: 'mehdi51' },
    { username: 'mehdi52' },
    { username: 'mehdi53' },
    { username: 'mehdi54' },
    { username: 'mehdi55' },
    { username: 'mehdi56' },
    { username: 'mehdi57' },
    { username: 'mehdi58' },
    { username: 'mehdi59' },
    { username: 'mehdi60' },
    { username: 'mehdi61' },
    { username: 'mehdi62' },
    { username: 'mehdi63' },
    { username: 'mehdi64' },
    { username: 'mehdi65' },
    { username: 'mehdi66' },
    { username: 'mehdi67' },
    { username: 'mehdi68' },
    { username: 'mehdi69' },
    { username: 'mehdi70' },
    { username: 'mehdi71' },
    { username: 'mehdi72' },
    { username: 'mehdi73' },
    { username: 'mehdi74' },
    { username: 'mehdi75' },
    { username: 'mehdi76' },
    { username: 'mehdi77' },
    { username: 'mehdi78' },
    { username: 'mehdi79' },
    { username: 'mehdi80' },
    { username: 'mehdi81' },
    { username: 'mehdi82' },
    { username: 'mehdi83' },
    { username: 'mehdi84' },
    { username: 'mehdi85' },
    { username: 'mehdi86' },
    { username: 'mehdi87' },
    { username: 'mehdi88' },
    { username: 'mehdi89' },
    { username: 'mehdi90' },
    { username: 'mehdi91' },
    { username: 'mehdi92' },
    { username: 'mehdi93' },
    { username: 'mehdi94' },
    { username: 'mehdi95' },
    { username: 'mehdi96' },
    { username: 'mehdi97' },
    { username: 'mehdi98' },
    { username: 'mehdi99' },
    { username: 'mehdi100' },
    { username: 'mehdi101' },
    { username: 'mehdi102' },
    { username: 'mehdi103' },
    { username: 'mehdi104' },
    { username: 'mehdi105' },
    { username: 'mehdi106' },
    { username: 'mehdi107' },
    { username: 'mehdi108' },
    { username: 'mehdi109' },
    { username: 'mehdi110' },
    { username: 'mehdi111' },
    { username: 'mehdi112' },
    { username: 'mehdi113' },
    { username: 'mehdi114' },
    { username: 'mehdi115' },
    { username: 'mehdi116' },
    { username: 'mehdi117' },
    { username: 'mehdi118' },
    { username: 'mehdi119' },
    { username: 'mehdi120' },
    { username: 'mehdi121' },
    { username: 'mehdi122' },
    { username: 'mehdi123' },
    { username: 'mehdi124' },
    { username: 'mehdi125' },
    { username: 'mehdi126' },
    { username: 'mehdi127' },
    { username: 'mehdi128' },
    { username: 'mehdi129' },
    { username: 'mehdi130' },
    { username: 'mehdi131' },
    { username: 'mehdi132' },
    { username: 'mehdi133' },
    { username: 'mehdi134' },
    { username: 'mehdi135' },
    { username: 'mehdi136' },
    { username: 'mehdi137' },
    { username: 'mehdi138' },
    { username: 'mehdi139' },
    { username: 'mehdi140' },
    { username: 'mehdi141' },
    { username: 'mehdi142' },
    { username: 'mehdi143' },
    { username: 'mehdi144' },
    { username: 'mehdi145' },
    { username: 'mehdi146' },
    { username: 'mehdi147' },
    { username: 'mehdi148' },
    { username: 'mehdi149' },
    { username: 'mehdi150' },
    { username: 'mehdi151' },
    { username: 'mehdi152' },
    { username: 'mehdi153' },
    { username: 'mehdi154' },
    { username: 'mehdi155' },
    { username: 'mehdi156' },
    { username: 'mehdi157' },
    { username: 'mehdi158' },
    { username: 'mehdi159' },
    { username: 'mehdi160' },
    { username: 'mehdi161' },
    { username: 'mehdi162' },
    { username: 'mehdi163' },
    { username: 'mehdi164' },
    { username: 'mehdi165' },
    { username: 'mehdi166' },
    { username: 'mehdi167' },
    { username: 'mehdi168' },
    { username: 'mehdi169' },
    { username: 'mehdi170' },
    { username: 'mehdi171' },
    { username: 'mehdi172' },
    { username: 'mehdi173' },
    { username: 'mehdi174' },
    { username: 'mehdi175' },
    { username: 'mehdi176' },
    { username: 'mehdi177' },
    { username: 'mehdi178' },
    { username: 'mehdi179' },
    { username: 'mehdi180' },
    { username: 'mehdi181' },
    { username: 'mehdi182' },
    { username: 'mehdi183' },
    { username: 'mehdi184' },
    { username: 'mehdi185' },
    { username: 'mehdi186' },
    { username: 'mehdi187' },
    { username: 'mehdi188' },
    { username: 'mehdi189' },
    { username: 'mehdi190' },
    { username: 'mehdi191' },
    { username: 'mehdi192' },
    { username: 'mehdi193' },
    { username: 'mehdi194' },
    { username: 'mehdi195' },
    { username: 'mehdi196' },
    { username: 'mehdi197' },
    { username: 'mehdi198' },
    { username: 'mehdi199' },
    { username: 'mehdi200' },
    { username: 'mehdi201' },
    { username: 'mehdi202' },
    { username: 'mehdi203' },
    { username: 'mehdi204' },
    { username: 'mehdi205' },
    { username: 'mehdi206' },
    { username: 'mehdi207' },
    { username: 'mehdi208' },
    { username: 'mehdi209' },
    { username: 'mehdi210' },
    { username: 'mehdi211' },
    { username: 'mehdi212' },
    { username: 'mehdi213' },
    { username: 'mehdi214' },
    { username: 'mehdi215' },
    { username: 'mehdi216' },
    { username: 'mehdi217' },
    { username: 'mehdi218' },
    { username: 'mehdi219' },
    { username: 'mehdi220' },
    { username: 'mehdi221' },
    { username: 'mehdi222' },
    { username: 'mehdi223' },
    { username: 'mehdi224' },
    { username: 'mehdi225' },
    { username: 'mehdi226' },
    { username: 'mehdi227' },
    { username: 'mehdi228' },
    { username: 'mehdi229' },
    { username: 'mehdi230' },
    { username: 'mehdi231' },
    { username: 'mehdi232' },
    { username: 'mehdi233' },
    { username: 'mehdi234' },
    { username: 'mehdi235' },
    { username: 'mehdi236' },
    { username: 'mehdi237' },
    { username: 'mehdi238' },
    { username: 'mehdi239' },
    { username: 'mehdi240' },
    { username: 'mehdi241' },
    { username: 'mehdi242' },
    { username: 'mehdi243' },
    { username: 'mehdi244' },
    { username: 'mehdi245' },
    { username: 'mehdi246' },
    { username: 'mehdi247' },
    { username: 'mehdi248' },
    { username: 'mehdi249' },
    { username: 'mehdi250' },
    { username: 'mehdi251' },
    { username: 'mehdi252' },
    { username: 'mehdi253' },
    { username: 'mehdi254' },
    { username: 'mehdi255' },
    { username: 'mehdi256' },
    { username: 'mehdi257' },
    { username: 'mehdi258' },
    { username: 'mehdi259' },
    { username: 'mehdi260' },
    { username: 'mehdi261' },
    { username: 'mehdi262' },
    { username: 'mehdi263' },
    { username: 'mehdi264' },
    { username: 'mehdi265' },
    { username: 'mehdi266' },
    { username: 'mehdi267' },
    { username: 'mehdi268' },
    { username: 'mehdi269' },
    { username: 'mehdi270' },
    { username: 'mehdi271' },
    { username: 'mehdi272' },
    { username: 'mehdi273' },
    { username: 'mehdi274' },
    { username: 'mehdi275' },
    { username: 'mehdi276' },
    { username: 'mehdi277' },
    { username: 'mehdi278' },
    { username: 'mehdi279' },
    { username: 'mehdi280' },
    { username: 'mehdi281' },
    { username: 'mehdi282' },
    { username: 'mehdi283' },
    { username: 'mehdi284' },
    { username: 'mehdi285' },
    { username: 'mehdi286' },
    { username: 'mehdi287' },
    { username: 'mehdi288' },
    { username: 'mehdi289' },
    { username: 'mehdi290' },
    { username: 'mehdi291' },
    { username: 'mehdi292' },
    { username: 'mehdi293' },
    { username: 'mehdi294' },
    { username: 'mehdi295' },
    { username: 'mehdi296' },
    { username: 'mehdi297' },
    { username: 'mehdi298' },
    { username: 'mehdi299' },
    { username: 'mehdi300' },
    { username: 'mehdi301' },
    { username: 'mehdi302' },
    { username: 'mehdi303' },
    { username: 'mehdi304' },
    { username: 'mehdi305' },
    { username: 'mehdi306' },
    { username: 'mehdi307' },
    { username: 'mehdi308' },
    { username: 'mehdi309' },
    { username: 'mehdi310' },
    { username: 'mehdi311' },
    { username: 'mehdi312' },
    { username: 'mehdi313' },
    { username: 'mehdi314' },
    { username: 'mehdi315' },
    { username: 'mehdi316' },
    { username: 'mehdi317' },
    { username: 'mehdi318' },
    { username: 'mehdi319' },
    { username: 'mehdi320' },
    { username: 'mehdi321' },
    { username: 'mehdi322' },
    { username: 'mehdi323' },
    { username: 'mehdi324' },
    { username: 'mehdi325' },
    { username: 'mehdi326' },
    { username: 'mehdi327' },
    { username: 'mehdi328' },
    { username: 'mehdi329' },
    { username: 'mehdi330' },
    { username: 'mehdi331' },
    { username: 'mehdi332' },
    { username: 'mehdi333' },
    { username: 'mehdi334' },
    { username: 'mehdi335' },
    { username: 'mehdi336' },
    { username: 'mehdi337' },
    { username: 'mehdi338' },
    { username: 'mehdi339' },
    { username: 'mehdi340' },
    { username: 'mehdi341' },
    { username: 'mehdi342' },
    { username: 'mehdi343' },
    { username: 'mehdi344' },
    { username: 'mehdi345' },
    { username: 'mehdi346' },
    { username: 'mehdi347' },
    { username: 'mehdi348' },
    { username: 'mehdi349' },
    { username: 'mehdi350' },
    { username: 'mehdi351' },
    { username: 'mehdi352' },
    { username: 'mehdi353' },
    { username: 'mehdi354' },
    { username: 'mehdi355' },
    { username: 'mehdi356' },
    { username: 'mehdi357' },
    { username: 'mehdi358' },
    { username: 'mehdi359' },
    { username: 'mehdi360' },
    { username: 'mehdi361' },
    { username: 'mehdi362' },
    { username: 'mehdi363' },
    { username: 'mehdi364' },
    { username: 'mehdi365' },
    { username: 'mehdi366' },
    { username: 'mehdi367' },
    { username: 'mehdi368' },
    { username: 'mehdi369' },
    { username: 'mehdi370' },
    { username: 'mehdi371' },
    { username: 'mehdi372' },
    { username: 'mehdi373' },
    { username: 'mehdi374' },
    { username: 'mehdi375' },
    { username: 'mehdi376' },
    { username: 'mehdi377' },
    { username: 'mehdi378' },
    { username: 'mehdi379' },
    { username: 'mehdi380' },
    { username: 'mehdi381' },
    { username: 'mehdi382' },
    { username: 'mehdi383' },
    { username: 'mehdi384' },
    { username: 'mehdi385' },
    { username: 'mehdi386' },
    { username: 'mehdi387' },
    { username: 'mehdi388' },
    { username: 'mehdi389' },
    { username: 'mehdi390' },
    { username: 'mehdi391' },
    { username: 'mehdi392' },
    { username: 'mehdi393' },
    { username: 'mehdi394' },
    { username: 'mehdi395' },
    { username: 'mehdi396' },
    { username: 'mehdi397' },
    { username: 'mehdi398' },
    { username: 'mehdi399' },
    { username: 'mehdi400' },
    { username: 'mehdi401' },
    { username: 'mehdi402' },
    { username: 'mehdi403' },
    { username: 'mehdi404' },
    { username: 'mehdi405' },
    { username: 'mehdi406' },
    { username: 'mehdi407' },
    { username: 'mehdi408' },
    { username: 'mehdi409' },
    { username: 'mehdi410' },
    { username: 'mehdi411' },
    { username: 'mehdi412' },
    { username: 'mehdi413' },
    { username: 'mehdi414' },
    { username: 'mehdi415' },
    { username: 'mehdi416' },
    { username: 'mehdi417' },
    { username: 'mehdi418' },
    { username: 'mehdi419' },
    { username: 'mehdi420' },
    { username: 'mehdi421' },
    { username: 'mehdi422' },
    { username: 'mehdi423' },
    { username: 'mehdi424' },
    { username: 'mehdi425' },
    { username: 'mehdi426' },
    { username: 'mehdi427' },
    { username: 'mehdi428' },
    { username: 'mehdi429' },
    { username: 'mehdi430' },
    { username: 'mehdi431' },
    { username: 'mehdi432' },
    { username: 'mehdi433' },
    { username: 'mehdi434' },
    { username: 'mehdi435' },
    { username: 'mehdi436' },
    { username: 'mehdi437' },
    { username: 'mehdi438' },
    { username: 'mehdi439' },
    { username: 'mehdi440' },
    { username: 'mehdi441' },
    { username: 'mehdi442' },
    { username: 'mehdi443' },
    { username: 'mehdi444' },
    { username: 'mehdi445' },
    { username: 'mehdi446' },
    { username: 'mehdi447' },
    { username: 'mehdi448' },
    { username: 'mehdi449' },
    { username: 'mehdi450' },
    { username: 'mehdi451' },
    { username: 'mehdi452' },
    { username: 'mehdi453' },
    { username: 'mehdi454' },
    { username: 'mehdi455' },
    { username: 'mehdi456' },
    { username: 'mehdi457' },
    { username: 'mehdi458' },
    { username: 'mehdi459' },
    { username: 'mehdi460' },
    { username: 'mehdi461' },
    { username: 'mehdi462' },
    { username: 'mehdi463' },
    { username: 'mehdi464' },
    { username: 'mehdi465' },
    { username: 'mehdi466' },
    { username: 'mehdi467' },
    { username: 'mehdi468' },
    { username: 'mehdi469' },
    { username: 'mehdi470' },
    { username: 'mehdi471' },
    { username: 'mehdi472' },
    { username: 'mehdi473' },
    { username: 'mehdi474' },
    { username: 'mehdi475' },
    { username: 'mehdi476' },
    { username: 'mehdi477' },
    { username: 'mehdi478' },
    { username: 'mehdi479' },
    { username: 'mehdi480' },
    { username: 'mehdi481' },
    { username: 'mehdi482' },
    { username: 'mehdi483' },
    { username: 'mehdi484' },
    { username: 'mehdi485' },
    { username: 'mehdi486' },
    { username: 'mehdi487' },
    { username: 'mehdi488' },
    { username: 'mehdi489' },
    { username: 'mehdi490' },
    { username: 'mehdi491' },
    { username: 'mehdi492' },
    { username: 'mehdi493' },
    { username: 'mehdi494' },
    { username: 'mehdi495' },
    { username: 'mehdi496' },
    { username: 'mehdi497' },
    { username: 'mehdi498' },
    { username: 'mehdi499' },
    { username: 'mehdi500' },
    { username: 'mehdi501' },
    { username: 'mehdi502' },
    { username: 'mehdi503' },
    { username: 'mehdi504' },
    { username: 'mehdi505' },
    { username: 'mehdi506' },
    { username: 'mehdi507' },
    { username: 'mehdi508' },
    { username: 'mehdi509' },
    { username: 'mehdi510' },
    { username: 'mehdi511' },
    { username: 'mehdi512' },
    { username: 'mehdi513' },
    { username: 'mehdi514' },
    { username: 'mehdi515' },
    { username: 'mehdi516' },
    { username: 'mehdi517' },
    { username: 'mehdi518' },
    { username: 'mehdi519' },
    { username: 'mehdi520' },
    { username: 'mehdi521' },
    { username: 'mehdi522' },
    { username: 'mehdi523' },
    { username: 'mehdi524' },
    { username: 'mehdi525' },
    { username: 'mehdi526' },
    { username: 'mehdi527' },
    { username: 'mehdi528' },
    { username: 'mehdi529' },
    { username: 'mehdi530' },
    { username: 'mehdi531' },
    { username: 'mehdi532' },
    { username: 'mehdi533' },
    { username: 'mehdi534' },
    { username: 'mehdi535' },
    { username: 'mehdi536' },
    { username: 'mehdi537' },
    { username: 'mehdi538' },
    { username: 'mehdi539' },
    { username: 'mehdi540' },
    { username: 'mehdi541' },
    { username: 'mehdi542' },
    { username: 'mehdi543' },
    { username: 'mehdi544' },
    { username: 'mehdi545' },
    { username: 'mehdi546' },
    { username: 'mehdi547' },
    { username: 'mehdi548' },
    { username: 'mehdi549' },
    { username: 'mehdi550' },
    { username: 'mehdi551' },
    { username: 'mehdi552' },
    { username: 'mehdi553' },
    { username: 'mehdi554' },
    { username: 'mehdi555' },
    { username: 'mehdi556' },
    { username: 'mehdi557' },
    { username: 'mehdi558' },
    { username: 'mehdi559' },
    { username: 'mehdi560' },
    { username: 'mehdi561' },
    { username: 'mehdi562' },
    { username: 'mehdi563' },
    { username: 'mehdi564' },
    { username: 'mehdi565' },
    { username: 'mehdi566' },
    { username: 'mehdi567' },
    { username: 'mehdi568' },
    { username: 'mehdi569' },
    { username: 'mehdi570' },
    { username: 'mehdi571' },
    { username: 'mehdi572' },
    { username: 'mehdi573' },
    { username: 'mehdi574' },
    { username: 'mehdi575' },
    { username: 'mehdi576' },
    { username: 'mehdi577' },
    { username: 'mehdi578' },
    { username: 'mehdi579' },
    { username: 'mehdi580' },
    { username: 'mehdi581' },
    { username: 'mehdi582' },
    { username: 'mehdi583' },
    { username: 'mehdi584' },
    { username: 'mehdi585' },
    { username: 'mehdi586' },
    { username: 'mehdi587' },
    { username: 'mehdi588' },
    { username: 'mehdi589' },
    { username: 'mehdi590' },
    { username: 'mehdi591' },
    { username: 'mehdi592' },
    { username: 'mehdi593' },
    { username: 'mehdi594' },
    { username: 'mehdi595' },
    { username: 'mehdi596' },
    { username: 'mehdi597' },
    { username: 'mehdi598' },
    { username: 'mehdi599' },
    { username: 'mehdi600' },
    { username: 'mehdi601' },
    { username: 'mehdi602' },
    { username: 'mehdi603' },
    { username: 'mehdi604' },
    { username: 'mehdi605' },
    { username: 'mehdi606' },
    { username: 'mehdi607' },
    { username: 'mehdi608' },
    { username: 'mehdi609' },
    { username: 'mehdi610' },
    { username: 'mehdi611' },
    { username: 'mehdi612' },
    { username: 'mehdi613' },
    { username: 'mehdi614' },
    { username: 'mehdi615' },
    { username: 'mehdi616' },
    { username: 'mehdi617' },
    { username: 'mehdi618' },
    { username: 'mehdi619' },
    { username: 'mehdi620' },
    { username: 'mehdi621' },
    { username: 'mehdi622' },
    { username: 'mehdi623' },
    { username: 'mehdi624' },
    { username: 'mehdi625' },
    { username: 'mehdi626' },
    { username: 'mehdi627' },
    { username: 'mehdi628' },
    { username: 'mehdi629' },
    { username: 'mehdi630' },
    { username: 'mehdi631' },
    { username: 'mehdi632' },
    { username: 'mehdi633' },
    { username: 'mehdi634' },
    { username: 'mehdi635' },
    { username: 'mehdi636' },
    { username: 'mehdi637' },
    { username: 'mehdi638' },
    { username: 'mehdi639' },
    { username: 'mehdi640' },
    { username: 'mehdi641' },
    { username: 'mehdi642' },
    { username: 'mehdi643' },
    { username: 'mehdi644' },
    { username: 'mehdi645' },
    { username: 'mehdi646' },
    { username: 'mehdi647' },
    { username: 'mehdi648' },
    { username: 'mehdi649' },
    { username: 'mehdi650' },
    { username: 'mehdi651' },
    { username: 'mehdi652' },
    { username: 'mehdi653' },
    { username: 'mehdi654' },
    { username: 'mehdi655' },
    { username: 'mehdi656' },
    { username: 'mehdi657' },
    { username: 'mehdi658' },
    { username: 'mehdi659' },
    { username: 'mehdi660' },
    { username: 'mehdi661' },
    { username: 'mehdi662' },
    { username: 'mehdi663' },
    { username: 'mehdi664' },
    { username: 'mehdi665' },
    { username: 'mehdi666' },
    { username: 'mehdi667' },
    { username: 'mehdi668' },
    { username: 'mehdi669' },
    { username: 'mehdi670' },
    { username: 'mehdi671' },
    { username: 'mehdi672' },
    { username: 'mehdi673' },
    { username: 'mehdi674' },
    { username: 'mehdi675' },
    { username: 'mehdi676' },
    { username: 'mehdi677' },
    { username: 'mehdi678' },
    { username: 'mehdi679' },
    { username: 'mehdi680' },
    { username: 'mehdi681' },
    { username: 'mehdi682' },
    { username: 'mehdi683' },
    { username: 'mehdi684' },
    { username: 'mehdi685' },
    { username: 'mehdi686' },
    { username: 'mehdi687' },
    { username: 'mehdi688' },
    { username: 'mehdi689' },
    { username: 'mehdi690' },
    { username: 'mehdi691' },
    { username: 'mehdi692' },
    { username: 'mehdi693' },
    { username: 'mehdi694' },
    { username: 'mehdi695' },
    { username: 'mehdi696' },
    { username: 'mehdi697' },
    { username: 'mehdi698' },
    { username: 'mehdi699' },
    { username: 'mehdi700' },
    { username: 'mehdi701' },
    { username: 'mehdi702' },
    { username: 'mehdi703' },
    { username: 'mehdi704' },
    { username: 'mehdi705' },
    { username: 'mehdi706' },
    { username: 'mehdi707' },
    { username: 'mehdi708' },
    { username: 'mehdi709' },
    { username: 'mehdi710' },
    { username: 'mehdi711' },
    { username: 'mehdi712' },
    { username: 'mehdi713' },
    { username: 'mehdi714' },
    { username: 'mehdi715' },
    { username: 'mehdi716' },
    { username: 'mehdi717' },
    { username: 'mehdi718' },
    { username: 'mehdi719' },
    { username: 'mehdi720' },
    { username: 'mehdi721' },
    { username: 'mehdi722' },
    { username: 'mehdi723' },
    { username: 'mehdi724' },
    { username: 'mehdi725' },
    { username: 'mehdi726' },
    { username: 'mehdi727' },
    { username: 'mehdi728' },
    { username: 'mehdi729' },
    { username: 'mehdi730' },
    { username: 'mehdi731' },
    { username: 'mehdi732' },
    { username: 'mehdi733' },
    { username: 'mehdi734' },
    { username: 'mehdi735' },
    { username: 'mehdi736' },
    { username: 'mehdi737' },
    { username: 'mehdi738' },
    { username: 'mehdi739' },
    { username: 'mehdi740' },
    { username: 'mehdi741' },
    { username: 'mehdi742' },
    { username: 'mehdi743' },
    { username: 'mehdi744' },
    { username: 'mehdi745' },
    { username: 'mehdi746' },
    { username: 'mehdi747' },
    { username: 'mehdi748' },
    { username: 'mehdi749' },
    { username: 'mehdi750' },
    { username: 'mehdi751' },
    { username: 'mehdi752' },
    { username: 'mehdi753' },
    { username: 'mehdi754' },
    { username: 'mehdi755' },
    { username: 'mehdi756' },
    { username: 'mehdi757' },
    { username: 'mehdi758' },
    { username: 'mehdi759' },
    { username: 'mehdi760' },
    { username: 'mehdi761' },
    { username: 'mehdi762' },
    { username: 'mehdi763' },
    { username: 'mehdi764' },
    { username: 'mehdi765' },
    { username: 'mehdi766' },
    { username: 'mehdi767' },
    { username: 'mehdi768' },
    { username: 'mehdi769' },
    { username: 'mehdi770' },
    { username: 'mehdi771' },
    { username: 'mehdi772' },
    { username: 'mehdi773' },
    { username: 'mehdi774' },
    { username: 'mehdi775' },
    { username: 'mehdi776' },
    { username: 'mehdi777' },
    { username: 'mehdi778' },
    { username: 'mehdi779' },
    { username: 'mehdi780' },
    { username: 'mehdi781' },
    { username: 'mehdi782' },
    { username: 'mehdi783' },
    { username: 'mehdi784' },
    { username: 'mehdi785' },
    { username: 'mehdi786' },
    { username: 'mehdi787' },
    { username: 'mehdi788' },
    { username: 'mehdi789' },
    { username: 'mehdi790' },
    { username: 'mehdi791' },
    { username: 'mehdi792' },
    { username: 'mehdi793' },
    { username: 'mehdi794' },
    { username: 'mehdi795' },
    { username: 'mehdi796' },
    { username: 'mehdi797' },
    { username: 'mehdi798' },
    { username: 'mehdi799' },
    { username: 'mehdi800' },
    { username: 'mehdi801' },
    { username: 'mehdi802' },
    { username: 'mehdi803' },
    { username: 'mehdi804' },
    { username: 'mehdi805' },
    { username: 'mehdi806' },
    { username: 'mehdi807' },
    { username: 'mehdi808' },
    { username: 'mehdi809' },
    { username: 'mehdi810' },
    { username: 'mehdi811' },
    { username: 'mehdi812' },
    { username: 'mehdi813' },
    { username: 'mehdi814' },
    { username: 'mehdi815' },
    { username: 'mehdi816' },
    { username: 'mehdi817' },
    { username: 'mehdi818' },
    { username: 'mehdi819' },
    { username: 'mehdi820' },
    { username: 'mehdi821' },
    { username: 'mehdi822' },
    { username: 'mehdi823' },
    { username: 'mehdi824' },
    { username: 'mehdi825' },
    { username: 'mehdi826' },
    { username: 'mehdi827' },
    { username: 'mehdi828' },
    { username: 'mehdi829' },
    { username: 'mehdi830' },
    { username: 'mehdi831' },
    { username: 'mehdi832' },
    { username: 'mehdi833' },
    { username: 'mehdi834' },
    { username: 'mehdi835' },
    { username: 'mehdi836' },
    { username: 'mehdi837' },
    { username: 'mehdi838' },
    { username: 'mehdi839' },
    { username: 'mehdi840' },
    { username: 'mehdi841' },
    { username: 'mehdi842' },
    { username: 'mehdi843' },
    { username: 'mehdi844' },
    { username: 'mehdi845' },
    { username: 'mehdi846' },
    { username: 'mehdi847' },
    { username: 'mehdi848' },
    { username: 'mehdi849' },
    { username: 'mehdi850' },
    { username: 'mehdi851' },
    { username: 'mehdi852' },
    { username: 'mehdi853' },
    { username: 'mehdi854' },
    { username: 'mehdi855' },
    { username: 'mehdi856' },
    { username: 'mehdi857' },
    { username: 'mehdi858' },
    { username: 'mehdi859' },
    { username: 'mehdi860' },
    { username: 'mehdi861' },
    { username: 'mehdi862' },
    { username: 'mehdi863' },
    { username: 'mehdi864' },
    { username: 'mehdi865' },
    { username: 'mehdi866' },
    { username: 'mehdi867' },
    { username: 'mehdi868' },
    { username: 'mehdi869' },
    { username: 'mehdi870' },
    { username: 'mehdi871' },
    { username: 'mehdi872' },
    { username: 'mehdi873' },
    { username: 'mehdi874' },
    { username: 'mehdi875' },
    { username: 'mehdi876' },
    { username: 'mehdi877' },
    { username: 'mehdi878' },
    { username: 'mehdi879' },
    { username: 'mehdi880' },
    { username: 'mehdi881' },
    { username: 'mehdi882' },
    { username: 'mehdi883' },
    { username: 'mehdi884' },
    { username: 'mehdi885' },
    { username: 'mehdi886' },
    { username: 'mehdi887' },
    { username: 'mehdi888' },
    { username: 'mehdi889' },
    { username: 'mehdi890' },
    { username: 'mehdi891' },
    { username: 'mehdi892' },
    { username: 'mehdi893' },
    { username: 'mehdi894' },
    { username: 'mehdi895' },
    { username: 'mehdi896' },
    { username: 'mehdi897' },
    { username: 'mehdi898' },
    { username: 'mehdi899' },
    { username: 'mehdi900' },
    { username: 'mehdi901' },
    { username: 'mehdi902' },
    { username: 'mehdi903' },
    { username: 'mehdi904' },
    { username: 'mehdi905' },
    { username: 'mehdi906' },
    { username: 'mehdi907' },
    { username: 'mehdi908' },
    { username: 'mehdi909' },
    { username: 'mehdi910' },
    { username: 'mehdi911' },
    { username: 'mehdi912' },
    { username: 'mehdi913' },
    { username: 'mehdi914' },
    { username: 'mehdi915' },
    { username: 'mehdi916' },
    { username: 'mehdi917' },
    { username: 'mehdi918' },
    { username: 'mehdi919' },
    { username: 'mehdi920' },
    { username: 'mehdi921' },
    { username: 'mehdi922' },
    { username: 'mehdi923' },
    { username: 'mehdi924' },
    { username: 'mehdi925' },
    { username: 'mehdi926' },
    { username: 'mehdi927' },
    { username: 'mehdi928' },
    { username: 'mehdi929' },
    { username: 'mehdi930' },
    { username: 'mehdi931' },
    { username: 'mehdi932' },
    { username: 'mehdi933' },
    { username: 'mehdi934' },
    { username: 'mehdi935' },
    { username: 'mehdi936' },
    { username: 'mehdi937' },
    { username: 'mehdi938' },
    { username: 'mehdi939' },
    { username: 'mehdi940' },
    { username: 'mehdi941' },
    { username: 'mehdi942' },
    { username: 'mehdi943' },
    { username: 'mehdi944' },
    { username: 'mehdi945' },
    { username: 'mehdi946' },
    { username: 'mehdi947' },
    { username: 'mehdi948' },
    { username: 'mehdi949' },
    { username: 'mehdi950' },
    { username: 'mehdi951' },
    { username: 'mehdi952' },
    { username: 'mehdi953' },
    { username: 'mehdi954' },
    { username: 'mehdi955' },
    { username: 'mehdi956' },
    { username: 'mehdi957' },
    { username: 'mehdi958' },
    { username: 'mehdi959' },
    { username: 'mehdi960' },
    { username: 'mehdi961' },
    { username: 'mehdi962' },
    { username: 'mehdi963' },
    { username: 'mehdi964' },
    { username: 'mehdi965' },
    { username: 'mehdi966' },
    { username: 'mehdi967' },
    { username: 'mehdi968' },
    { username: 'mehdi969' },
    { username: 'mehdi970' },
    { username: 'mehdi971' },
    { username: 'mehdi972' },
    { username: 'mehdi973' },
    { username: 'mehdi974' },
    { username: 'mehdi975' },
    { username: 'mehdi976' },
    { username: 'mehdi977' },
    { username: 'mehdi978' },
    { username: 'mehdi979' },
    { username: 'mehdi980' },
    { username: 'mehdi981' },
    { username: 'mehdi982' },
    { username: 'mehdi983' },
    { username: 'mehdi984' },
    { username: 'mehdi985' },
    { username: 'mehdi986' },
    { username: 'mehdi987' },
    { username: 'mehdi988' },
    { username: 'mehdi989' },
    { username: 'mehdi990' },
    { username: 'mehdi991' },
    { username: 'mehdi992' },
    { username: 'mehdi993' },
    { username: 'mehdi994' },
    { username: 'mehdi995' },
    { username: 'mehdi996' },
    { username: 'mehdi997' },
    { username: 'mehdi998' },
    { username: 'mehdi999' },
    { username: 'mehdi1000' },
  ];
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prismaService: PrismaService,
  ) {}

  async insertRedis() {
    const key = 'users';
    await this.cacheManager.set(key, this.data);
  }

  async insertDb() {
    return await this.prismaService.user.createMany({
      data: this.data,
    });
  }

  async getDb() {
    return await this.prismaService.user.findMany();
  }

  async getHello() {
    return 'Hello World!';
  }
}