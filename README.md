# BiliBiliС����ѧϰ�������ƣ�
## ��ĿԤ��ͼ

![image](https://github.com/wuyangshu/bilibili/raw/master/GIF.gif)

## С����
С������һ������ʵ��֮ǰֻ����ԭ��̬APP����ʵ�ֵ�Ч���͹��ܡ�
С������������ص㣺1.����ԣ�С�����ǲ���Ҫ���ذ�װ�ģ����ü��ߣ��ǳ������û���ʹ�á����Ҳ�ռ���ֻ����ڴ棬�ܱ�ݡ�
2.Ψһ�ԣ�С����������Ǿ���Ψһ�Եģ�˭��ע�����˭�ģ��������Ѿ�ע��ɹ��ˣ�����û�а취��ע��ġ�

## �������������֣�
С������Ϊһ��ȽȽ��������ǣ���Ϊ������������ȥ��app�ķ�����ǣ����Һ��������֣����Ժ��ܵ����ǵ�ϲ�����ر��ǿ����ߡ�

## ��������ʲô��
��Ϊһ��ǰ�˿�����Ա�������ּ���С�������е�����ģ���ˣ��ص�ѡ�˸�����������ϲ����BiliBili���֣�˳����߿���������

## ��Ŀ���߼��ĵ�
1. **΢��web�����߹��ߣ�**[΢��С�������](https://mp.weixin.qq.com/debug/wxadoc/dev/) ΢�ſ�����С����༭��������ذ�װ����ʹ�ã�
2. **�����ĵ���**[΢��С���򱦵��ؼ�](https://www.w3cschool.cn/weixinapp/9wou1q8j.html) ��������ϸ�Ľ�����С����ĸ�����Ϣ�������������ܡ�API�ȵȣ��кܶ�ֵ������ȥ�Ķ�����Ϣ��
3. **ͼ��⣺** [Iconfont-����Ͱ�ʸ��ͼ���](http://www.iconfont.cn/) �������վ��ֱ��������ʲôͼ�궼���ҵ�����������
4. **ͼ��⣺**[fontawesomeͼ���](http://www.fontawesome.com.cn/faicons/)(https://github.com/SakuraDon99/fontawesome-wxss)
ps���ȵ��ڶ�����ַ����fontawesome-wxss���ٵ���һ��fontawesomeͼ����������ͼ�����ƣ�Ȼ���չ����̳̻��߰ٶȽ̳�ʹ�á�

## Ŀ¼�ṹ

    ��  app.js                           // ����С�������������(�߼�)��ȫ������
    ��  app.json                         // С���򹫹�����(ȫ�ֵ�����)
    ��  app.wxss                         // С���򹫹���ʽ��
    ��  components.wxss                  // �����ȫ�֣���������ʽ
    ��  project.config.json              // ��Ŀ�����ļ�
    ��  sitemap.json                     // ��������С������ҳ���Ƿ�����΢������
    ��  
    ����.idea                             // JetBrainsϵ�е����IDE����Ŀ��������Ŀ�ض����ö��洢�ڸ�.idea�ļ����µ�һ��xml�ļ�
    ��  ��  bilibili.iml
    ��  ��  misc.xml
    ��  ��  modules.xml
    ��  ��  workspace.xml
    ��  ��  
    ��  ����dictionaries
    ��  ��      Administrator.xml
    ��  ��      
    ��  ����inspectionProfiles
    ��  ��      Project_Default.xml
    ��  ��      
    ��  ����libraries
    ��          wx_d_ts.xml
    ��          
    ����components                        // ���
    ��  ����MyTitle                        // ҳ�棨ͷ�����������
    ��          MyTitle.js
    ��          MyTitle.json
    ��          MyTitle.wxml
    ��          MyTitle.wxss
    ��          
    ����images                            // �����Ŀ�����õ��ⲿͼ��ͼƬ
    ��      back.png
    ��      collect.png
    ��      danmu_32.png
    ��      download.png
    ��      fanju.png
    ��      gengduo.png
    ��      lishi.png
    ��      logo.png
    ��      more.png
    ��      paihang.png
    ��      play.png
    ��      search.png
    ��      share.png
    ��      tuijian1.png
    ��      user.png
    ��      zhibo.png
    ��      
    ����pages                             // �������ҳ��
    ��  ����detail                         // bilibili��ҳ����Ƶ����ҳ
    ��  ��      detail.js                 // ����ҳ���߼�
    ��  ��      detail.json               // ����ҳ������
    ��  ��      detail.wxml               // ����ҳ�Ľṹ
    ��  ��      detail.wxss               // ����ҳ����ʽ
    ��  ��      
    ��  ����index                          // bilibili��ҳ
    ��          index.js                 // ��ҳ��ҳ���߼�
    ��          index.json               // ��ҳ��ҳ������
    ��          index.wxml               // ��ҳ��ҳ��ṹ
    ��          index.wxss               // ��ҳ��ҳ����ʽ
    ��          
    ����styles
    ��      fontawesome.wxss             // fontawesomeͼ����ʽ
    ��      
    ����utils                             // ���ȫ�ֵ�һЩ.js�ļ�,�����¼����룬���õĹ��ߺ���
            util.js
     
          
 ## ��Ŀ����
 #### ��ʵ�ֹ��ܣ�
  * ����ֲ�ͼ
  * ��Ƶ����
  * ��Ƶ����
  * ��Ƶ����
 
 #### δʵ�ֹ��ܣ�
 ���кܶ๦��ûʵ�֣�ֻ��ģ�´С�����Ժ�����Ƶġ�
 
 
 #### ��Ŀ��ַ
 
 #### ���Ҫ˵�Ļ�
 �����Ҽ���������Щ��̫���죬�Ӵ�С���򲻾ã����кܶ���Ҫѧϰ�ĵط������ܺܺõ��������������Ĺ��ܣ��һ��кܳ���ѧϰ֮·Ҫ�ߡ�
