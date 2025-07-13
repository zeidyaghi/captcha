# captcha
الكابتشا ( Captcha)  حروف التحقق أو الكابتشا ( Captcha) هي كلمة إنجليزية مركبة تمثل الحروف الأولى للكلمات في جملة  "Completely Automatic Public Turing Test to Tell Computers and Humans Apart" ،  حيث تعني هذه الجملة «اختبار تورنغ العام والأوتوماتيكي للتمييز بين الحاسب والإنسان».  ويكيبيديا.
نماذج من الكابتشا  من إعدادي ، مع أمثلة يمكن تجريبها وتحميلها!
مصادر الكابتشا التي استخدمتها يمكن تحميلها أيضاً.
ملاحظة: عند تنفيذ الأمثلة الحية والضغط على زر ارسال تظهر الرسالة التالية (405 Not Allowed)
A 405 error happens when a web browser sends a request using an HTTP method that the server doesn’t allow.
وهذا يعود لموقع GitHub: 

بينما تعمل الامثلة بشكل جيد على مواقع ثانية https://gbzy.free.nf/captcha/examples/captwebdevzy/captwebdevzy.htm
رسالة الخطأ 405 Not Allowed تعني أن المتصفح أرسل طلبًا (عادةً POST) إلى الخادم،
ولكن الخادم (في هذه الحالة GitHub Pages) لا يسمح باستخدام هذا النوع من الطلبات في ذلك السياق.

السبب الجوهري: هو أن (GitHub Pages) هو خادم ثابت (Static Hosting)، أي لا يدعم طلبات (POST) أو أي معالجة من جانب الخادم (مثل PHP، أو إرسال النماذج).

عندما تضغط على زر "إرسال" في نموذج <form> يستخدم (method="post")، 
يحاول المتصفح إرسال البيانات إلى الخادم.
لكن على GitHub Pages، يُسمح فقط بطلبات GET لعرض الصفحات والملفات.

لذلك، يظهر الخطأ 405 Method Not Allowed عند محاولة POST.

ولتجنب هذه المشكلة  استبدلت طريقة (POST ب GET).اختفت المشكلة ورسائل الخطأ!!!!!
على كل حال رابط الكابتشا على GitHub هو التالي:     https://zeidyaghi.github.io/captcha

ورابط الكابتشا على موقع آخر يدعم الـ PHP ( يعمل بشكل طبيعي) هو التالي:   https://gbzy.free.nf/captcha

