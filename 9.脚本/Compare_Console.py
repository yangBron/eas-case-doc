import os


class cmpFile:

    def __init__(self, file1, file2):
        self.file1 = file1
        self.file2 = file2

    def fileExists(self):
        if os.path.exists(self.file1) and \
                os.path.exists(self.file2):
            return True
        else:
            return False

    # 对比文件不同之处, 并返回结果
    def compare(self):
        if cmpFile(self.file1, self.file2).fileExists() == False:
            return []

        fp1 = open(self.file1, "r", encoding='UTF-8')
        fp2 = open(self.file2, "r", encoding='UTF-8')
        flist1 = [i for i in fp1]
        flist2 = [x for x in fp2]
        fp1.close()
        fp2.close()
        flines1 = len(flist1)
        flines2 = len(flist2)

        if flines1 < flines2:
            flist1[flines1:flines2 + 1] = ' ' * (flines2 - flines1)
        if flines2 < flines1:
            flist2[flines2:flines1 + 1] = ' ' * (flines1 - flines2)

        counter = 1
        cmpreses = []
        for x in zip(flist1, flist2):
            if x[0] == x[1]:
                counter += 1
                continue
            if x[0] != x[1]:
                cmpres = '%s和%s第%s行不同, 内容为: %s --> %s' % \
                         (self.file1, self.file2, counter, x[0].strip(), x[1].strip())
                cmpreses.append(cmpres)
                counter += 1
        return cmpreses


if __name__ == '__main__':
    cmpfile = cmpFile(r'D:\A_web_install\minLayer_bgaescape_data.txt',
                      r'D:\A_工具箱\A22156_v2\A_Complete_test\bga_minLayer_result.txt')
    difflines = cmpfile.compare()
    for i in difflines:
        print(i, end='\n')
