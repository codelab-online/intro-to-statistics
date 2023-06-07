## Week 6 Tutorial - Part B

## Read the data file

alcohol = read.csv("BloodAlcohol.csv")

## a)
summary(lm(BAC~Mass, data=alcohol))


## b)
predict(lm(BAC~Mass, data=alcohol), newdata=data.frame(Mass=70), interval="confidence")

## c)

summary(lm(BAC ~ Mass + Drinks + Sex, data=alcohol))

## d)

predict(lm(BAC ~ Mass + Drinks + Sex, data=alcohol), newdata=data.frame(Mass=60, Drinks=1.8, Sex="M"))

## f)

summary(aov(BAC ~ Dosage, data=alcohol))


## g)
TukeyHSD(aov(BAC ~ Dosage, data=alcohol))