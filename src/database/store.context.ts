import db from './prisma-connection';

// @desc returns plan_id or all fields of free plan depending on params
export const getFreePlan = async (onlyId = true) => {
    if(onlyId)
    {
        const { plan_id } = (await db.plans.findFirst({ where: { price: 0 }, select:{ plan_id: true}}) || {});
        return plan_id;
    } else {
        const plan = await db.plans.findFirst({ where: {price: 0 }});
        return plan;
    }
}