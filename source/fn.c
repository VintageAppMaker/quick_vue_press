#include <stdio.h>
// void를 리턴받고 파라메터는 char*형인 함수형포인터
typedef void (*func)(char*);

void f1(char* str){
    printf("%s->%s\n", "f1입니다", str);
}

void f2(char* str){
    printf("%s->%s\n", "f2입니다", str);
}

void f3(char* str){
    printf("%s->%s\n", "f3입니다", str);
}

const int FUNCTIONONE   = 1;
const int FUNCTIONTWO   = 2;
const int FUNCTIONTHREE = 3;
func  fArray[] = {f1, f2, f3};

int main() {
	fArray[FUNCTIONTWO]("일반적으로 이렇게 사용합니다.");
	return 0;
}


